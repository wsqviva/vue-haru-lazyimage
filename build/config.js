const path = require('path')

const rootPath = path.dirname(__dirname)

module.exports = {
  PATHS: {
    root: rootPath,
    output: path.join(rootPath, 'dist')
  },
  port: 5200,
  title: '断了的弦'
}