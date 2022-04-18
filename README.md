# iconfont-to-json
为iconfont转成js

# Install

```
npm i 
```

# Use

```
node index.js [input iconfont.css path] [output file name]
```

# Example

```
node index.js ./iconfont.css iconfont.js
```

```css
@font-face {
  font-family: "iconfont";
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bqxin:before {
  content: "\e68b";
}

.icon-sousuo-copy:before {
  content: "\e62b";
}

.icon-pinglun:before {
  content: "\e63a";
}

.icon-jia:before {
  content: "\e632";
}

.icon-camera_icon:before {
  content: "\e657";
}

.icon-tiaoguofenxiang:before {
  content: "\e77c";
}


```
return
```js
export default {
  "bqxin": "\e68b",
  "sousuo-copy": "\e62b",
  "pinglun": "\e63a",
  "jia": "\e632",
  "camera_icon": "\e657",
  "tiaoguofenxiang": "\e77c"
}
```
