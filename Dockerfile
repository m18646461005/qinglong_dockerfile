FROM debian
FROM node:18-slim as nodebuilder
FROM python:3.11-alpine3.18 as builder
COPY ./ql/package.json ./ql/.npmrc ./ql/pnpm-lock.yaml /tmp/build/

COPY --from=nodebuilder /usr/local/bin/node /usr/local/bin/
COPY --from=nodebuilder /usr/local/lib/node_modules/. /usr/local/lib/node_modules/
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
RUN apk add --no-cache gcc musl-dev linux-headers
RUN set -x \
  && apk update \
  && apk add npm \
  && npm config set registry https://registry.npm.taobao.org/ \
  && npm i -g pnpm@8.3.1 \
  && cd /tmp/build \
  && pnpm install --prod

FROM python:3.11-alpine3.18

ARG QL_MAINTAINER="whyour"
LABEL maintainer="${QL_MAINTAINER}"
ARG QL_URL=https://github.com/${QL_MAINTAINER}/qinglong.git
ARG QL_BRANCH=develop

ENV PNPM_HOME=/root/.local/share/pnpm \
  PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/.local/share/pnpm:/root/.local/share/pnpm/global/5/node_modules:$PNPM_HOME \
  NODE_PATH=/usr/local/bin:/usr/local/pnpm-global/5/node_modules:/usr/local/lib/node_modules:/root/.local/share/pnpm/global/5/node_modules \
  LANG=C.UTF-8 \
  SHELL=/bin/bash \
  PS1="\u@\h:\w \$ " \
  QL_DIR=/ql \
  QL_BRANCH=${QL_BRANCH}

RUN set -x \
  && apk update -f \
  && apk upgrade \
  && apk --no-cache add -f bash \
  coreutils \
  curl \
  wget \
  tzdata \
  perl \
  openssl \
  nginx \
  nodejs \
  jq \
  openssh \
  procps \
  netcat-openbsd \
  npm \
  && rm -rf /var/cache/apk/* \
  && apk update \
  && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
  && echo "Asia/Shanghai" > /etc/timezone \
  && npm install -g pnpm@8.3.1 pm2 tsx \
  && rm -rf /root/.pnpm-store \
  && rm -rf /root/.local/share/pnpm/store \
  && rm -rf /root/.cache \
  && rm -rf /root/.npm

ARG SOURCE_COMMIT
COPY ./ql ${QL_DIR}
COPY ./ql_s /static
RUN cd ${QL_DIR} \
  && cp -f .env.example .env \
  && chmod 777 ${QL_DIR}/shell/*.sh \
  && chmod 777 ${QL_DIR}/docker/*.sh \
  && mkdir -p ${QL_DIR}/static \
  && cp -rf /static/* ${QL_DIR}/static \
  && rm -rf /static

COPY --from=builder /tmp/build/node_modules/. /ql/node_modules/

WORKDIR ${QL_DIR}

HEALTHCHECK --interval=5s --timeout=2s --retries=20 \
  CMD curl -sf --noproxy '*' http://127.0.0.1:5400/api/health || exit 1

COPY requirements.txt ./
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

RUN ${QL_DIR}/docker/docker-entrypoint.sh
EXPOSE 5700
ENTRYPOINT ["./docker/start.sh"]
