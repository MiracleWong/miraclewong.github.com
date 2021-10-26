title: 使用“ssh-copy-id”登录新的服务器
date: 2017-03-23 15:28:50
tags: 
- 总结
---


步骤：
首先在新的机器上确认，有没有安装ssh服务

如果已经安装，那么开启


有下面的的这些检查项
1. ip地址对不对
2. 查看防火墙是否关闭
3. ping  一下能否ping通
4. 查看sshd服务是否启动
5. 进入/home/.ssh/know_hosts   查看是否有想要ssh的主机的IP的信息，有的话就删除
6. 重新启动sshd服务
7. ssh Ip

