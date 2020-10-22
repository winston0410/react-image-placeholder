import React from 'react'
import {
  getSrc
} from './utilities/_Helper.js'
const imagemin = require('imagemin')
const imageminSvgo = require('imagemin-svgo')
const svgToMiniDataURI = require('mini-svg-data-uri')

const svgPlaceholder = async (imageComponent) => {
  const imagePath = getSrc(imageComponent)

  const filePath = await imagemin([imagePath], {
    plugins: [

    ]
  })

  console.log(filePath)
  // const svg = ''
  //
  // const optimizedURI = `"${svgToMiniDataURI(svg)}"`
  //
  // const transformedComponent = ''
  //
  // return transformedComponent
}

export default svgPlaceholder
