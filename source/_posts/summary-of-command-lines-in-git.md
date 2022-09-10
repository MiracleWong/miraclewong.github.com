title: Git的常用命令行总结
date: 2016-01-04 20:00:00
tags: 
- Git
- 总结
categories: 
- Git
---

git init —— 初始化仓库
git status —— 查看仓库的状态
git add —— 向暂存区中添加文件
git commit —— 保存仓库中的历史记录
例子：git commit -m "详细信息"
或者：git commit后在打开的命令行中写内容
	第一行：简述提交的更改内容
	第二行：空行
	第三行以后：记述更改的原因和详细内容
git log —— 查看提交日志
git log --pretty=short —— 只显示提交信息的第一行
git log FileName [or FolderName] —— 只显示指定目录、文件的日志
git log －p —— 显示文件的改动
git log --graph —— 使用图形化的形式显示提交日志
git diff —— 查看当前工作树和暂存区的差别
其中，“＋”加号标出的是新添加的行，被删除的行，则是用“－”减号标出。

好习惯：
在执行git commit命令之前先执行git diff HEAD命令，确认完毕后再进行提交。
git branch —— 显示分支一览表，同时确认当前所在分支
git checkout -b feature-A —— 创建并切换分支到feature-A
git checkout - —— 切换到上一个分支
分支的命名:
特性分支：feature_xxx
修复bug分支：hotfix_xxx
git merge --no-ff feature_A  创建合并
git reset —— 回溯历史版本
例子：git reset --hard 哈希值（4位以上即可，一般为6位）
git log —— 该只能查看命令以当前状态为终点的历史日志
git reflog —— 查看当前仓库的操作日志

git commit -amend —— 修改（上一条）提交信息
git rebase -i HEAD~N —— 压缩历史：可以选定当前分支中包含HEAD（最新提交）在内的N个最新历史记录为对象

git remote add URL地址 —— 添加远程仓库
例子：git remote add origin git@github.com:github-book/git-tutorial.git

git push —— 推送至远程仓库
例子：git push -u origin master 
当前分支的内容会被推送给远程仓库origin的master分支。
-u参数可以在推送的同时，将origin仓库的master分支设置为本地仓库当前分支的upstream（上游）。

git clone URL地址 —— 获取远程仓库
说明：执行git clone 后，会默认处于master分支下，同时系统自动将origin设置成为该远程仓库的标识符。
git branch -a —— 查看当前分支的相关信息

获取远程的某个分支——Feature-D
git checkout -b feature-D origin/feature-D 

git pull —— 获取最新的远程仓库分支
