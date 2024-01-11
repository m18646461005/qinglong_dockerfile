#!/usr/bin/env bash

dir_shell=$QL_DIR/shell
. $dir_shell/env.sh
. $dir_shell/share.sh
. $dir_shell/api.sh

send_mark=$dir_shell/send_mark

## 检测cron的差异，$1：脚本清单文件路径，$2：cron任务清单文件路径，$3：增加任务清单文件路径，$4：删除任务清单文件路径
diff_cron() {
  local list_scripts="$1"
  local list_task="$2"
  local list_add="$3"
  local list_drop="$4"
  if [[ -s $list_task ]] && [[ -s $list_scripts ]]; then
    grep -vwf $list_task $list_scripts >$list_add
    grep -vwf $list_scripts $list_task >$list_drop
  fi

  if [[ ! -s $list_task ]] && [[ -s $list_scripts ]]; then
    cp -f $list_scripts $list_add
  fi

  if [[ ! -s $list_scripts ]] && [[ -s $list_task ]]; then
    cp -f $list_task $list_drop
  fi
}

## 输出是否有新的或失效的定时任务，$1：新的或失效的任务清单文件路径，$2：新/失效
output_list_add_drop() {
  local list=$1
  local type=$2
  if [[ -s $list ]]; then
    echo -e "检测到有${type}的定时任务:"
    cat $list
    echo
  fi
}

## 自动删除失效的脚本与定时任务，需要：1.AutoDelCron 设置为 true；2.正常更新js脚本，没有报错；3.存在失效任务
## $1：失效任务清单文件路径
del_cron() {
  local list_drop=$1
  local path=$2
  local detail=""
  local ids=""
  echo -e "开始尝试自动删除失效的定时任务..."
  for cron in $(cat $list_drop); do
    local id=$(cat $list_crontab_user | grep -E "$cmd_task.* $cron" | perl -pe "s|.*ID=(.*) $cmd_task.* $cron\.*|\1|" | head -1 | awk -F " " '{print $1}')
    if [[ $ids ]]; then
      ids="$ids,\"$id\""
    else
      ids="\"$id\""
    fi
    cron_file="$dir_scripts/${cron}"
    if [[ -f $cron_file ]]; then
      cron_name=$(grep "new Env" $cron_file | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:.*\('\''\|"\)\([^"'\'']*\)\('\''\|"\).*:\2:' | sed 's:"::g' | sed "s:'::g" | head -1)
      rm -f $cron_file
    fi
    [[ -z $cron_name ]] && cron_name="$cron"
    if [[ $detail ]]; then
      detail="${detail}\n${cron_name}"
    else
      detail="${cron_name}"
    fi
  done
  if [[ $ids ]]; then
    result=$(del_cron_api "$ids")
    notify_api "$path 删除任务${result}" "$detail"
  fi
}

## 自动增加定时任务，需要：1.AutoAddCron 设置为 true；2.正常更新js脚本，没有报错；3.存在新任务；4.crontab.list存在并且不为空
## $1：新任务清单文件路径
add_cron() {
  local list_add=$1
  local path=$2
  echo -e "开始尝试自动添加定时任务..."
  local detail=""
  cd $dir_scripts
  for file in $(cat $list_add); do
    local file_name=${file/${path}\//}
    file_name=${file_name/${path}\_/}
    if [[ -f $file ]]; then
      cron_line=$(
        perl -ne "{
                        print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*$file_name/
                    }" $file |
          perl -pe "{
                        s|[^\d\*]*(([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?$file_name.*|\1|g;
                        s|\*([\d\*])(.*)|\1\2|g;
                        s|  | |g;
                    }" | sort -u | head -1
      )
      cron_name=$(grep "new Env" $file | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:.*\('\''\|"\)\([^"'\'']*\)\('\''\|"\).*:\2:' | sed 's:"::g' | sed "s:'::g" | head -1)
      [[ -z $cron_name ]] && cron_name="$file_name"
      [[ -z $cron_line ]] && cron_line=$(grep "cron:" $file | awk -F ":" '{print $2}' | head -1 | xargs)
      [[ -z $cron_line ]] && cron_line=$(grep "cron " $file | awk -F "cron \"" '{print $2}' | awk -F "\" " '{print $1}' | head -1 | xargs)
      [[ -z $cron_line ]] && cron_line="$default_cron"
      result=$(add_cron_api "$cron_line:$cmd_task $file:$cron_name:$SUB_ID")
      echo -e "$result"
      if [[ $detail ]]; then
        detail="${detail}${result}\n"
      else
        detail="${result}\n"
      fi
    fi
  done
  notify_api "$path 新增任务" "$detail"
}

## 更新仓库
update_repo() {
  local url="$1"
  local path="$2"
  local blackword="$3"
  local dependence="$4"
  local branch="$5"
  local extensions="$6"
  local proxy="$7"
  local autoAddCron="$8"
  local autoDelCron="$9"
  local tmp="${url%/*}"
  local authorTmp1="${tmp##*/}"
  local authorTmp2="${authorTmp1##*:}"
  local author="${authorTmp2##*.}"

  local repo_path="${dir_repo}/${uniq_path}"

  make_dir "${dir_scripts}/${uniq_path}"

  local formatUrl="$url"
  rm -rf ${repo_path} &>/dev/null
  git_clone_scripts "${formatUrl}" ${repo_path} "${branch}" "${proxy}"

  if [[ $exit_status -eq 0 ]]; then
    echo -e "\n拉取 ${uniq_path} 成功...\n"
    diff_scripts "$repo_path" "$author" "$path" "$blackword" "$dependence" "$extensions" "$autoAddCron" "$autoDelCron"
  else
    echo -e "\n拉取 ${uniq_path} 失败，请检查网络...\n"
  fi
}

## 更新所有 raw 文件
update_raw() {
  local url="$1"
  local proxy="$2"
  local autoAddCron="$3"
  local autoDelCron="$4"

  if [[ ! $autoAddCron ]]; then
    autoAddCron=${AutoAddCron}
  fi
  if [[ ! $autoDelCron ]]; then
    autoDelCron=${AutoDelCron}
  fi

  local proxyStr=""
  if [[ $proxy ]]; then
    if [[ $url == http:* ]]; then
      proxyStr="-e \"http_proxy=${proxy}\""
    elif [[ $url == https:* ]]; then
      proxyStr="-e \"http_proxy=${proxy};https_proxy=${proxy}\""
    fi
  fi

  local raw_url="$url"
  local suffix="${raw_url##*.}"
  local raw_file_name="${uniq_path}.${suffix}"
  echo -e "开始下载：${raw_url} \n\n保存路径：$dir_raw/${raw_file_name}\n"

  wget -q --no-check-certificate $proxyStr -O "$dir_raw/${raw_file_name}.new" ${raw_url}

  if [[ $? -eq 0 ]]; then
    mv "$dir_raw/${raw_file_name}.new" "$dir_raw/${raw_file_name}"
    echo -e "下载 ${raw_file_name} 成功...\n"
    cd $dir_raw
    local filename="raw_${raw_file_name}"
    local cron_id=$(cat $list_crontab_user | grep -E "$cmd_task.* $filename" | perl -pe "s|.*ID=(.*) $cmd_task.* $filename\.*|\1|" | head -1 | awk -F " " '{print $1}')
    cp -f $raw_file_name $dir_scripts/${filename}
    if [[ -z $cron_id ]] && [[ ${autoAddCron} == true ]]; then
      cron_line=$(
        perl -ne "{
                      print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*$raw_file_name/
                  }" $raw_file_name |
          perl -pe "{
                      s|[^\d\*]*(([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?$raw_file_name.*|\1|g;
                      s|\*([\d\*])(.*)|\1\2|g;
                      s|  | |g;
                  }" | sort -u | head -1
      )
      cron_name=$(grep "new Env" $raw_file_name | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:.*\('\''\|"\)\([^"'\'']*\)\('\''\|"\).*:\2:' | sed 's:"::g' | sed "s:'::g" | head -1)
      [[ -z $cron_name ]] && cron_name="$raw_file_name"
      [[ -z $cron_line ]] && cron_line=$(grep "cron:" $raw_file_name | awk -F ":" '{print $2}' | head -1 | xargs)
      [[ -z $cron_line ]] && cron_line=$(grep "cron " $raw_file_name | awk -F "cron \"" '{print $2}' | awk -F "\" " '{print $1}' | head -1 | xargs)
      [[ -z $cron_line ]] && cron_line="$default_cron"
      result=$(add_cron_api "$cron_line:$cmd_task $filename:$cron_name:$SUB_ID")
      echo -e "$result\n"
      notify_api "新增任务通知" "\n$result"
      # update_cron_api "$cron_line:$cmd_task $filename:$cron_name:$cron_id"
    fi
  else
    echo -e "下载 ${raw_file_name} 失败，保留之前正常下载的版本...\n"
    [[ -f "$dir_raw/${raw_file_name}.new" ]] && rm -f "$dir_raw/${raw_file_name}.new"
  fi

}

## 调用用户自定义的extra.sh
run_extra_shell() {
  if [[ -f $file_extra_shell ]]; then
    . $file_extra_shell
  else
    echo -e "$file_extra_shell文件不存在，跳过执行...\n"
  fi
}

## 脚本用法
usage() {
  echo -e "ql命令使用方法："
  echo -e "1. $cmd_update update                                                                  # 更新并重启青龙"
  echo -e "2. $cmd_update extra                                                                   # 运行自定义脚本"
  echo -e "3. $cmd_update raw <fileurl>                                                            # 更新单个脚本文件"
  echo -e "4. $cmd_update repo <repourl> <path> <blacklist> <dependence> <branch> <extensions>    # 更新单个仓库的脚本"
  echo -e "5. $cmd_update rmlog <days>                                                            # 删除旧日志"
  echo -e "6. $cmd_update bot                                                                     # 启动tg-bot"
  echo -e "7. $cmd_update check                                                                   # 检测青龙环境并修复"
  echo -e "8. $cmd_update resetlet                                                                # 重置登录错误次数"
  echo -e "9. $cmd_update resettfa                                                                # 禁用两步登录"
}

reload_qinglong() {
  local reload_target="${1}"
  local primary_branch="master"
  if [[ "${QL_BRANCH}" == "develop" ]]; then
    primary_branch="develop"
  fi

  if [[ "$reload_target" == 'system' ]]; then
    cp -rf ${dir_tmp}/qinglong-${primary_branch}/* ${dir_root}/
    rm -rf $dir_static/*
    cp -rf ${dir_tmp}/qinglong-static-${primary_branch}/* ${dir_static}/
    cp -f $file_config_sample $dir_config/config.sample.sh
  fi

  if [[ "$reload_target" == 'data' ]]; then
    cp -rf ${dir_tmp}/data ${dir_root}/
  fi

  reload_pm2
}

## 更新qinglong
update_qinglong() {
  rm -rf ${dir_tmp}/*
  local mirror="gitee"
  local downloadQLUrl="https://gitee.com/whyour/qinglong/repository/archive"
  local downloadStaticUrl="https://gitee.com/whyour/qinglong-static/repository/archive"
  local githubStatus=$(curl -s -m 2 -IL "https://google.com" | grep 200)
  if [[ ! -z $githubStatus ]]; then
    mirror="github"
    downloadQLUrl="https://github.com/whyour/qinglong/archive/refs/heads"
    downloadStaticUrl="https://github.com/whyour/qinglong-static/archive/refs/heads"
  fi
  echo -e "使用 ${mirror} 源更新...\n"

  local primary_branch="master"
  if [[ "${QL_BRANCH}" == "develop" ]]; then
    primary_branch="develop"
  fi

  wget -cqO "${dir_tmp}/ql.zip" "${downloadQLUrl}/${primary_branch}.zip"
  exit_status=$?

  if [[ $exit_status -eq 0 ]]; then
    echo -e "更新青龙源文件成功...\n"

    unzip -oq ${dir_tmp}/ql.zip -d ${dir_tmp}

    update_qinglong_static
  else
    echo -e "更新青龙源文件失败，请检查网络...\n"
  fi
}

update_qinglong_static() {
  wget -cqO "${dir_tmp}/static.zip" "${downloadStaticUrl}/${primary_branch}.zip"
  exit_status=$?

  if [[ $exit_status -eq 0 ]]; then
    echo -e "更新青龙静态资源成功...\n"
    unzip -oq ${dir_tmp}/static.zip -d ${dir_tmp}

    check_update_dep
  else
    echo -e "更新青龙静态资源失败，请检查网络...\n"
  fi
}

check_update_dep() {
  echo -e "\n开始检测依赖...\n"
  if [[ ! -s $dir_scripts/package.json ]] || [[ $(diff $dir_sample/package.json $dir_scripts/package.json) ]]; then
    cp -f $dir_sample/package.json $dir_scripts/package.json
    npm_install_2 $dir_scripts
  fi

  if [[ $(diff $dir_root/package.json ${dir_tmp}/qinglong-${primary_branch}/package.json) ]]; then
    npm_install_2 "${dir_tmp}/qinglong-${primary_branch}"
  fi

  if [[ $exit_status -eq 0 ]]; then
    echo -e "\n依赖检测安装成功...\n"
    echo -e "更新包下载成功..."

    if [[ "$needRestart" == 'true' ]]; then
      cp -rf ${dir_tmp}/qinglong-${primary_branch}/* ${dir_root}/
      rm -rf $dir_static/*
      cp -rf ${dir_tmp}/qinglong-static-${primary_branch}/* ${dir_static}/
      cp -f $file_config_sample $dir_config/config.sample.sh

      reload_pm2
    fi
  else
    echo -e "\n依赖检测安装失败，请检查网络...\n"
  fi
}

## 对比脚本
diff_scripts() {
  local dir_current=$(pwd)
  local repo_path="$1"
  local author="$2"
  local path="$3"
  local blackword="$4"
  local dependence="$5"
  local extensions="$6"
  local autoAddCron="$7"
  local autoDelCron="$8"

  if [[ ! $autoAddCron ]]; then
    autoAddCron=${AutoAddCron}
  fi
  if [[ ! $autoDelCron ]]; then
    autoDelCron=${AutoDelCron}
  fi

  gen_list_repo "$repo_path" "$author" "$path" "$blackword" "$dependence" "$extensions"

  local list_add="$dir_list_tmp/${uniq_path}_add.list"
  local list_drop="$dir_list_tmp/${uniq_path}_drop.list"
  diff_cron "$dir_list_tmp/${uniq_path}_scripts.list" "$dir_list_tmp/${uniq_path}_user.list" $list_add $list_drop

  if [[ -s $list_drop ]]; then
    output_list_add_drop $list_drop "失效"
    if [[ ${autoDelCron} == true ]]; then
      del_cron $list_drop $uniq_path
    fi
  fi
  if [[ -s $list_add ]]; then
    output_list_add_drop $list_add "新"
    if [[ ${autoAddCron} == true ]]; then
      add_cron $list_add $uniq_path
    fi
  fi
  cd $dir_current
}

## 生成脚本的路径清单文件
gen_list_repo() {
  local dir_current=$(pwd)
  local repo_path="$1"
  local author="$2"
  local path="$3"
  local blackword="$4"
  local dependence="$5"

  rm -f $dir_list_tmp/${uniq_path}*.list &>/dev/null

  cd ${repo_path}

  local cmd="find ."
  local index=0
  if [[ $6 ]]; then
    file_extensions="$6"
    if [[ $file_extensions =~ "|" ]]; then
      file_extensions=$(echo $file_extensions | sed 's/|/ /g')
    fi
  fi
  for extension in $file_extensions; do
    if [[ $index -eq 0 ]]; then
      cmd="${cmd} -name \"*.${extension}\""
    else
      cmd="${cmd} -o -name \"*.${extension}\""
    fi
    let index+=1
  done
  files=$(eval $cmd | sed 's/^..//')
  if [[ $path ]]; then
    files=$(echo "$files" | egrep "$path")
  fi
  if [[ $blackword ]]; then
    files=$(echo "$files" | egrep -v "$blackword")
  fi

  cp -f $file_notify_js "${dir_scripts}/${uniq_path}"
  cp -f $file_notify_py "${dir_scripts}/${uniq_path}"

  if [[ $dependence ]]; then
    cd ${repo_path}
    results=$(eval $cmd | sed 's/^..//' | egrep "$dependence")
    for _file in ${results}; do
      file_path=$(dirname $_file)
      make_dir "${dir_scripts}/${uniq_path}/${file_path}"
      cp -f $_file "${dir_scripts}/${uniq_path}/${file_path}"
    done
  fi

  if [[ -d $dir_dep ]]; then
    cp -rf $dir_dep/* "${dir_scripts}/${uniq_path}" &>/dev/null
  fi

  for file in ${files}; do
    filename=$(basename "$file")
    cp -f $file "$dir_scripts/${uniq_path}/${filename}"
    echo "${uniq_path}/${filename}" >>"$dir_list_tmp/${uniq_path}_scripts.list"
    # cron_id=$(cat $list_crontab_user | grep -E "$cmd_task.* ${uniq_path}_${filename}" | perl -pe "s|.*ID=(.*) $cmd_task.* ${uniq_path}_${filename}\.*|\1|" | head -1 | awk -F " " '{print $1}')
    # if [[ $cron_id ]]; then
    #   result=$(update_cron_command_api "$cmd_task ${uniq_path}/${filename}:$cron_id")
    # fi
  done
  grep -E "${cmd_task}.* ${uniq_path}" ${list_crontab_user} | perl -pe "s|.*ID=(.*) ${cmd_task}.* (${uniq_path}.*)\.*|\2|" | awk -F " " '{print $1}' | sort -u >"$dir_list_tmp/${uniq_path}_user.list"
  cd $dir_current
}

get_uniq_path() {
  local url="$1"
  local branch="$2"
  local urlTmp="${url%*/}"
  local repoTmp="${urlTmp##*/}"
  local repo="${repoTmp%.*}"
  local tmp="${url%/*}"
  local authorTmp1="${tmp##*/}"
  local authorTmp2="${authorTmp1##*:}"
  local author="${authorTmp2##*.}"

  uniq_path="${author}_${repo}"
  [[ $branch ]] && uniq_path="${uniq_path}_${branch}"
}

main() {
  ## for ql update
  show_log="false"
  while getopts ":l" opt; do
    case $opt in
    l)
      show_log="true"
      ;;
    esac
  done
  [[ "$show_log" == "true" ]] && shift $(($OPTIND - 1))

  local p1="${1}"
  local p2="${2}"
  local p3="${3}"
  local p4="${4}"
  local p5="${5}"
  local p6="${6}"
  local p7="${7}"
  local p8="${8}"
  local p9="${9}"
  local p10="${10}"
  local log_dir="${p1}"
  make_dir "$dir_log/$log_dir"
  local log_time=$(date "+%Y-%m-%d-%H-%M-%S")
  local log_path="${log_dir}/${log_time}.log"
  local file_path="$dir_log/$log_path"

  cmd=">> $file_path 2>&1"
  [[ "$show_log" == "true" ]] && cmd=""

  local time_format="%Y-%m-%d %H:%M:%S"
  local time=$(date "+$time_format")
  local begin_timestamp=$(format_timestamp "$time_format" "$time")
  [[ $ID ]] && update_cron "\"$ID\"" "0" "$$" "$log_path" "$begin_timestamp"

  local begin_time=$(format_time "$time_format" "$time")

  if [[ "$p1" != "repo" ]] && [[ "$p1" != "raw" ]]; then
    eval echo -e "\#\# 开始执行... $begin_time\\\n" $cmd
  fi

  if [[ "$show_log" == "true" ]] && [[ $ID ]]; then
    eval echo -e "请移除 -l 参数" $cmd
    exit 1
  fi

  case $p1 in
  update)
    fix_config
    local needRestart=${p2:-"true"}
    eval update_qinglong $cmd
    ;;
  reload)
    eval reload_qinglong "$p2" $cmd
    ;;
  extra)
    eval run_extra_shell $cmd
    ;;
  repo)
    get_uniq_path "$p2" "$p6"
    if [[ -n $p2 ]]; then
      update_repo "$p2" "$p3" "$p4" "$p5" "$p6" "$p7" "$p8" "$p9" "$p10"
    else
      eval echo -e "命令输入错误...\\\n" $cmd
      eval usage $cmd
    fi
    ;;
  raw)
    get_uniq_path "$p2"
    if [[ -n $p2 ]]; then
      update_raw "$p2" "$p3" "$p4"
    else
      eval echo -e "命令输入错误...\\\n" $cmd
      eval usage $cmd
    fi
    ;;
  rmlog)
    eval . $dir_shell/rmlog.sh "$p2" $cmd
    ;;
  bot)
    eval . $dir_shell/bot.sh $cmd
    ;;
  check)
    eval . $dir_shell/check.sh $cmd
    ;;
  resetlet)
    auth_value=$(cat $file_auth_user | jq '.retries =0' -c)
    echo "$auth_value" >$file_auth_user
    eval echo -e "重置登录错误次数成功" $cmd
    ;;
  resettfa)
    auth_value=$(cat $file_auth_user | jq '.twoFactorActivated =false' | jq '.twoFactorActived =false' -c)
    echo "$auth_value" >$file_auth_user
    eval echo -e "禁用两步验证成功" $cmd
    ;;
  *)
    eval echo -e "命令输入错误...\\\n" $cmd
    eval usage $cmd
    ;;
  esac

  local etime=$(date "+$time_format")
  local end_time=$(format_time "$time_format" "$etime")
  local end_timestamp=$(format_timestamp "$time_format" "$etime")
  local diff_time=$(($end_timestamp - $begin_timestamp))
  [[ $ID ]] && update_cron "\"$ID\"" "1" "" "$log_path" "$begin_timestamp" "$diff_time"

  if [[ "$p1" != "repo" ]] && [[ "$p1" != "raw" ]]; then
    eval echo -e "\\\n\#\# 执行结束... $end_time  耗时 $diff_time 秒　　　　　" $cmd
  fi

  if [[ -f $file_path ]]; then
    cat $file_path
  fi
}

main "$@"

exit 0
