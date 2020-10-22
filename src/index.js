import React from 'react'
import {
  getSrc,
  setSrc
} from './utilities/_Helper.js'
const imagemin = require('imagemin')
const imageminSvgo = require('imagemin-svgo')
const svgToMiniDataURI = require('mini-svg-data-uri')

const defaultOptions = { svgOptions: {} }

const svgPlaceholder = async (imageComponent, { svgOptions } = defaultOptions) => {
  const imagePath = getSrc(imageComponent)

  const filePath = await imagemin([imagePath], {
    plugins: [
      imageminSvgo(svgOptions)
    ]
  })

  const svg = filePath[0].data.toString('utf8')

  const optimizedURI = `"${svgToMiniDataURI(svg)}"`

  const transformedComponent = setSrc(imageComponent)(optimizedURI)

  return transformedComponent
}

export default svgPlaceholder
