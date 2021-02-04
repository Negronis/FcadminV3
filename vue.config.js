module.exports = {
  lintOnSave: false,
  // 启用内网穿透
  devServer: {
    disableHostCheck: true
  },
  // 打包后不生成.map文件
  productionSourceMap: false,
  // 解决项目上线路径问题
  publicPath: process.env.NODE_ENV === "production" ? "./" : '/'
}