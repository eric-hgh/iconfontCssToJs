# iconfont-to-json
为iconfont转成js

# Install

```
npm i iconfont-to-json -g
```

# Use

```
iconfonttojson [input iconfont.css path] [output file name]
```

# Example

```
iconfonttojson ./iconfont.css
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
  "bqxin": 59019,
  "sousuo-copy": 58923,
  "pinglun": 58938,
  "jia": 58930,
  "camera_icon": 58967,
  "tiaoguofenxiang": 59260
}
```
