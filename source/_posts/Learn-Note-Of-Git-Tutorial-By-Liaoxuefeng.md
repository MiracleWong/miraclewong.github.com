title: “廖雪峰的Git教程”学习笔记
date: 2018-04-14 23:14:47
tags:
- Git
categories: 
- Git
---

# Git简介
## Git的版本
```
git version
which git
```

## 设置Git
```
git config --global user.name "MiracleWong"
git config --global user.email "youremail@example.com"
git config --global color.ui auto
```

## 查看Git的设置
```
git config --global user.name
git config --global user.email
git config --global color.ui
```

# 初始化仓库
```
cd project
git init

git init project 
```

## 查看文件状态
```
git status
```

## 添加文件到版本库
`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage）

```
git add readme.txt
```

## 提交到仓库

`git commit`就可以一次性把暂存区的所有修改提交到分支

```
git commit -m "add readme.txt"
```

# 时光穿梭机

## 查看日志——提交历史
```
git log
git log --pretty=oneline 
git log --pretty=oneline --abbrev-commit  显示前6位commit-id
```

HEAD 表示当前版本，上个版本HEAD^，上上个版本HEAD^。

## 记录命令历史
```
git reflog
```

## 回退到上一个版本
```
git reset --hard HEAD^
```

## 查看工作区和版本库里面最新版本的区别
```
git diff HEAD -- readme.txt
```

## 撤销暂存区的内容，重新放回工作区
```
git reset HEAD readme.txt
```

## 丢弃工作区的修改
```
git checkout -- readme.txt
```

## 删除文件
```
git rm file
git commit -m "dekete file"
```

## 删错了文件，恢复
`git checkout `其实是用版本库里的版本替换为工作区的版本

```
git checkout -- test.txt
```

# 远程仓库
## 生成ssh key
```
ssh-keygen -t rsa -C "youremail@example.com"
```

## 添加远程仓库
```
git remote add origin git@github.com:michaelliao/learngit.git
```

## 本地内容推送到远程仓库
```
git push -u origin master 第一次推送master分支的所有内容
git push
git push origin master
```

## 远程仓库克隆
```
git clone git@github.com:michaelliao/gitskills.git
```

# 分支管理
## 创建分支
```
git branch <name>
```

## 创建+切换分支
```
git checkou -b dev
```

## 列出所有分支
```
git branch
```

## 切换分支
```
git checkout master
```

## 合并某分支到当前分支
```
git merge dev
git merge <name>
```

## 删除分支
```
git branch -d <name>
```

## 分支合并
`--bo-ff`强制禁用Fast-Forward模式，生成一个新的commit信息，从分支历史上可以看出分支信息

```
git merge --no-ff -m "merge with no-ff" dev
```

## 分支策略
master 分支应该是非常稳定的，仅用来发布新版本，平时不在上面干活。
干活在dev分支上

## stash功能，储存当前工作现场
```
git stash
```

## 恢复现场，stash不删除（默认）
```
git stash apply stash@{0}
git stash drop (删除储存的现场)
```

## 恢复现场，stash删除
```
git stash pop
```

## 查看储存的现场
```
git stash list
```

## 强行删除分支
```
git branch -D <name>
```

## 显示仓库信息
```
git remote -v
```

## 推送分支
```
git push origin master
git push origin dev
```

## 创建远程分支到本地
```
git checkout -b dev origin/dev
```

## 建立本地分支和远程分支的关联
```
git branch --set-upstream dev origin/dev
```

# 标签管理
## 创建标签
```
git tag v1.0
```

## 查看所有标签
```
git tag
```

## 补充tag
```
git tag v0.9 commit-id
```

## 显示标签tag信息
```
git show <tagname>
```

## 创建带有说明的标签
用-a指定标签名，-m指定说明文字：

```
git tag -a v0.1 -m "version 0.1 released" commit-id
```

## 用PGP签名标签
```
git tag -s v0.2 -m "signed version 0.2 released" commit-id
```

## 删除标签
```
git tag -d v0.1
```

## 推送某个标签到远程
```
git push origin v1.0
```

## 一次性推送全部尚未推送到远程的本地标签、
```
git push origin --tags
```

## 删除一个远程标签
```
git push origin :refs/tags/v1.0
```

# Git服务
[The world’s leading software development platform · GitHub](https://github.com/)
[码云 Gitee — 开源中国基于 Git 和 SVN 的代码托管和协作开发平台](https://gitee.com/)
[Coding - 代码托管 项目管理 WebIDE 企业服务](https://coding.net)

# 自定义Git
## Git显示颜色
```
git config --global color.ui true
git config --global color.ui auto
```

## 忽略特殊文件
1. 忽略操作系统自动生成的文件，比如缩略图等；
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。

## 强制添加忽略文件
```
git add -f App.class
```

## gitignore命令检查
```
git check-ignore -v App.class
```

## 设置别名
```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.unstage 'reset HEAD'
git config --global alias.last 'log -1' 显示最后一次提交的信息
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## 配置文件
```
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
[remote "origin"]
    url = git@github.com:michaelliao/learngit.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
```

# 参考资料

- [Git官网](https://git-scm.com/)
- [Git Pro 中文版](https://git-scm.com/book/zh/v2)


