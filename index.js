#!/usr/bin/env node

const path = require('path')
const Iconfont = require('./src/Iconfont')
let ConsoleArguments = process.argv.splice(2);


let config = {
  outputFileName: ConsoleArguments[1] || 'iconfont.js'
}

new Iconfont().render(ConsoleArguments[0], config)

