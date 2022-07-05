'use strict'
const path = require('path');
var fs = require("fs");
const fileDatas = {};
const filsList = [];
const mdBaseUrl = "../files_md/";
const pathName = path.resolve(__dirname, mdBaseUrl);
function getFilesByDir(pathName) {
  let files = fs.readdirSync(pathName);
  //console.log('files',files,files.length)
  //对文本文件名称数字化之后排序
  files = files.sort((a,b)=>{return parseInt(a)-parseInt(b)})
  for(var i = 0;i < files.length;i ++){
    //console.log('pathName',pathName)
    //console.log('files',i,files)
    const file = fs.statSync(path.join(pathName, files[i]))
    //console.log('files[i]',files[i],file.isDirectory(),filsList[filsList.length-1])
    if(file.isDirectory()){
      filsList.push({
        "text": files[i],
        "items": []
      })
      getFilesByDir(path.join(pathName, files[i]))
    }else if(file.isFile()){
      //读取文件内容的代码
      //const fileData = fs.readFileSync(path.join(pathName, files[i]), 'utf-8')
      //fileDatas[files[i]] = fileData
      filsList[filsList.length-1]?.items.push({
        "text": files[i],
        "link": mdBaseUrl + filsList[filsList.length-1].text + "/" + files[i]
      })
      //20220703du注：循环遍历文件总是出错，filsList[i]不存在，是因为i不是filsList的当前遍历值；而filsList的当前是filsList[filsList.length-1]，
      // 也就是数组最后一个参数去追加即可
    }
  }
}

getFilesByDir(pathName);
//console.log('filsList',filsList)
fs.writeFile('./docs/node_cmd/sidebar.json',JSON.stringify(filsList),function(err){
  console.log('sidebar.json',err);
})