import React from 'react'
import {
  getSrc
  // setSrc
} from './utilities/_Helper.js'
const imagemin = require('imagemin')
const imageminSvgo = require('imagemin-svgo')
const svgToMiniDataURI = require('mini-svg-data-uri')
const potrace = require('potrace')
const trace = new potrace.Potrace()

const defaultOptions = { svgOptions: {} }

const svgPlaceholder = async (imageComponent, { svgOptions } = defaultOptions) => {
  const imagePath = getSrc(imageComponent)

  trace.loadImage(imagePath, function (err) {
    if (err) throw err

    trace.getSVG() // returns SVG document contents

    console.log(
      trace.getSVG()
    )

    trace.getPathTag() // will return just <path> tag
    trace.getSymbol('traced-image') // will return <symbol> tag with given ID
  })

  // const filePath = await imagemin([imagePath], {
  //   plugins: [
  //     imageminSvgo(svgOptions)
  //   ]
  // })
  //
  // const svg = filePath[0].data.toString('utf8')
  //
  // const optimizedURI = `"${svgToMiniDataURI(svg)}"`
  //
  // const transformedComponent = setSrc(imageComponent)(optimizedURI)

  // return transformedComponent
}

export default svgPlaceholder
