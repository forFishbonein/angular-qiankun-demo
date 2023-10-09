/*
 * @FilePath: custom-webpack.config.js
 * @Author: Aron
 * @Date: 2023-10-07 10:47:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-07 11:14:57
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
const appName = require("./package.json").name;
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${appName}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal（angular12已经是webpack5脚手架了）
  },
};
