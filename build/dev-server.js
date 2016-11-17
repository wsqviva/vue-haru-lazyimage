
const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const { PATHS, port } = require('./config')

const app = express()

const compiler = webpack(webpackConfig)

const devMiddleWare = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

app.use(devMiddleWare)
app.use(webpackHotMiddleware(compiler))

// const mfs = devMiddleWare.fileSystem
// const file = path.join(PATHS.output, 'index.html')
// app.get('/', (req, res) => {
//   devMiddleWare.waitUntilValid(() => {
//     console.log(file)
//     const html = mfs.readFileSync(file)
//     res.end(html)
//   })
// })

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}, Ctrl+C to stop`)
})