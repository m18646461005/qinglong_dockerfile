#!/bin/bash

dir_shell=/ql/shell
. $dir_shell/env.sh
. $dir_shell/share.sh
link_shell

echo -e "======================1. ��������ļ�========================\n"
make_dir /etc/nginx/conf.d
make_dir /run/nginx
init_nginx
fix_config

pm2 l &>/dev/null

echo -e "======================2. ��װ����========================\n"
patch_version
if [[ $PipMirror ]]; then
  pip3 config set global.index-url $PipMirror
fi
current_npm_registry=$(cd && pnpm config get registry)
is_equal_registry=$(echo $current_npm_registry | grep "${NpmMirror}")
if [[ "$is_equal_registry" == "" ]]; then
  cd && pnpm config set registry $NpmMirror
  pnpm install -g
fi
if [[ ! -s $dir_scripts/package.json ]] || [[ $(diff $dir_sample/package.json $dir_scripts/package.json) ]]; then
  cp -f $dir_sample/package.json $dir_scripts/package.json
  npm_install_2 $dir_scripts
fi
echo

exec "$@"