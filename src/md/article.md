## 克隆仓库
```
git clone https://github.com/lqt0327/lesson_bm.git

git status

git add .

git commit -m 'homework'

git push origin master
```

## git新建存储库（new repository）后的初始化操作
```
git init

git add .

git commit -m 'project init'

git remote add origin git@github.com:lqt0327/vue-music.git
（git@github.com:lqt0327/vue-music.git 是该存储库的ssh）

git pull origin master

git push origin master  //报错，存储库里有文件，导致与本地版本不一致

git push -u origin master -f  //解决上面报错，强制替换

git push origin master

```

## 创建和管理分支
```
在网站中创建分支 或 git checkout -b 2020-7-18-home  //-b 表示有这个分支就切换到这个分支，没有就创建后再切换到这个分支

git pull  //查看当前有的分支

git checkout home-header  //更改分支到home-header，如由master改为home-header

git status  //查看状态，准备合并分支

git add .

git commit -m 'home-header'

git push

git checkout master  //切换到master分支

git merge home-header  //把home-header分支的工作成果合并到master分支上

git pull  //从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。

git push

```

[git pull 参考](https://www.liaoxuefeng.com/wiki/896043488029600/900375748016320)


```
git push --set-upstream origin 2020-07-18-home
```