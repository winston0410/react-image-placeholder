import React from 'react'
import {
  getSrc
} from './utilities/_Helper.js'
// const imagemin = require('imagemin')
// const imageminSvgo = require('imagemin-svgo')
// const svgToMiniDataURI = require('mini-svg-data-uri')

const svgPlaceholder = (imageComponent) => {
  console.log(imageComponent)

  const imagePath = console.log(
    getSrc(imageComponent)
  )

  // const svg = ''
  //
  // const optimizedURI = `"${svgToMiniDataURI(svg)}"`
  //
  // const transformedComponent = ''
  //
  // return transformedComponent
}

export default svgPlaceholder
