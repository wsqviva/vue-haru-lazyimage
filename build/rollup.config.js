// const buble = require('rollup-plugin-buble')
// const replace = require('rollup-plugin-replace')
// const babel = require('rollup-plugin-babel')
// const commonjs = require('rollup-plugin-commonjs')
// const resolve = require('rollup-plugin-node-resolve')

// const version = process.env.VERSION || require('../package.json').version

// module.exports = {
//   entry: 'src/index.js',
//   dest: 'dist/vue-haru-lazyimage.js',
//   format: 'umd',
//   moduleName: 'VueHaruLazyimage',
//   plugins: [
//     resolve({
//       main: true,
//       browser: true,
//     }),
//     commonjs(),
//     babel({
//       exclude: 'node_modules/**',
//     }),
//     replace({
//       exclude: 'node_modules/**',
//       // make sure the value is wrapped in double quotes
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
//     }),
//     // buble()
//   ],
//   external: [
//     'vue'
//   ],
//   banner:
// `/**
//   * vue-haru-lazyimage v${version}
//   * @author wsqviva
//   */`
// }