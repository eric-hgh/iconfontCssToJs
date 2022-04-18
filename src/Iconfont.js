
const fs = require('fs')
const css = require('css');
const path = require('path')

class Iconfont {
  render(fpath, options){

    let cssTxtBuffet = fs.readFileSync(fpath)

    let cssText = cssTxtBuffet.toString()

    let obj = css.parse(cssText);


    let outputJson = {}

    obj.stylesheet.rules.forEach(val=>{

      try {
        if(val.selectors[0].indexOf('.icon-') !== -1) {

          let key = val.selectors[0].replace('.icon-', '').replace(':before', '')
        
          // let base16 = val.declarations[0].value.replace(/\\/g, '').replace(/\"/g, '')
          // outputJson[key] = parseInt(base16, 16)
          let value = val.declarations[0].value.replace(/\\/g, '').replace(/\"/g, '')
          outputJson[key] = "\\" +  value
        }

      } catch (e) {

      }
    })
    let outputJsonStr=JSON.stringify(outputJson, null, 2).replace(/\\\\/g, '\\')
    let outPut = `export default ${outputJsonStr}`
    fs.writeFileSync(path.resolve(fpath, '../', options.outputFileName), outPut)


  }
}

module.exports = Iconfont