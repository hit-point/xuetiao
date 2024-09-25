#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git remote add xuetiao-doc https://github.com/hit-point/xuetiao-doc
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:hit-point/xuetiao-doc.git main

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f xuetiao-doc main

# cd -
