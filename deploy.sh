#!/usr/bin/env sh

# abort on errors
set -e
# 创建文件目录
# node docs/node_cmd/getfiles.js
# build
npm run docs:build
# 本地启动
# npm run docs:serve
# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:dujungithub/myVitepressMd.git main:gh-pages

cd -
