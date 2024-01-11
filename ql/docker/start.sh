#!/bin/bash

dir_shell=/ql/shell
. $dir_shell/env.sh
. $dir_shell/share.sh
link_shell

echo -e "======================3. ����nginx========================\n"
nginx -s reload 2>/dev/null || nginx -c /etc/nginx/nginx.conf
echo -e "nginx�����ɹ�...\n"

echo -e "======================4. ����pm2����========================\n"
reload_pm2

if [[ $AutoStartBot == true ]]; then
  echo -e "======================5. ����bot========================\n"
  nohup ql -l bot >$dir_log/bot.log 2>&1 &
  echo -e "bot��̨������...\n"
fi

if [[ $EnableExtraShell == true ]]; then
  echo -e "====================6. ִ���Զ���ű�========================\n"
  nohup ql -l extra >$dir_log/extra.log 2>&1 &
  echo -e "�Զ���ű���ִ̨����...\n"
fi

echo -e "############################################################\n"
echo -e "���������ɹ�..."
echo -e "############################################################\n"

crond -f >/dev/null