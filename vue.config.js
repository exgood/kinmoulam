// vue.config.js
module.exports = {
   publicPath: process.env.NODE_ENV === 'production'
    ? '/kinmoulam/'
    : '/',	
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Ангелът Кинмуолам'
      return args
    })
  }
}
