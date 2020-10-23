```javascript
const potrace = require('potrace')
const trace = new potrace.Potrace()
const fs = require('fs')

trace.loadImage(imagePath, function (err) {
  if (err) throw err

  // To output svg
  fs.writeFileSync('./example.svg', trace.getSVG())

  // To output svg as glob
  // trace.getSVG() // returns SVG document contents
  //
  // console.log(
  //   trace.getSVG()
  // )
})
```
