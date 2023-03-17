title: VS Code 同步设置的两种方法
date: 2021-05-20 15:30:00
tags:
- VSCode
categories:
- VSCode

---

## 插件同步
1. 下载插件：Code Sync Setting
2. 根据要求，登录GitHub，获取GitHub 的Token 和 Gist ID
3. 通过 Alt + Shift + U 命令，上传配置
4. 在其他机器的VS Code 上，安装Code Sync Setting，设置与上方相同的Gist ID
6. 通过 Alt + Shift + U， 下载配置

![plugin-setting-sync](http://blog-images.iotop.work/image/plugin-setting-sync.png)

## VS Code 账号同步

通过状态栏的按钮「管理(Manage)」，打开「打开同步设置（Turn On Settings Sync）」 
![turn-on-sync](http://blog-images.iotop.work/image/turn-on-sync.png)
你将被要求登录并了解你想同步的偏好；目前支持设置、键盘快捷键、扩展、用户片段和用户界面状态。
![sync-configure](http://blog-images.iotop.work/image/sync-configure.png)
选择 "登录并打开" 按钮，会要求你选择用微软或GitHub账户登录。
![sync-accounts](http://blog-images.iotop.work/image/sync-accounts.png)
登录后，设置同步将被打开，并继续在后台自动同步你的偏好。
![authorize-to-gtihub](http://blog-images.iotop.work/image/authorize-to-gtihub.png)
VS Code在同步时总是存储你的偏好的本地和远程备份，并提供访问这些备份的视图。如果出了问题，你可以从这些视图中恢复你的数据。
![sync-backup-views](http://blog-images.iotop.work/image/sync-backup-views.png)
	
## 参考资料
1. [Settings Sync in Visual Studio Code](https://code.visualstudio.com/docs/editor/settings-sync)