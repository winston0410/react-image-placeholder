import React from 'react'
import {
  getSrc,
  setSrc
} from './utilities/_Helper.js'
import sharp from 'sharp'
const imagemin = require('imagemin')
const imageminSvgo = require('imagemin-svgo')
const svgToMiniDataURI = require('mini-svg-data-uri')

const defaultOptions = {
  imagemin: {
    plugins: []
  },
  sharp: {
    resizeOption: {

    }
  }
}

const svgPlaceholder = ({ imagemin, sharp } = defaultOptions) => async (imageComponent) => {
  const imagePath = getSrc(imageComponent)

  const resizedImage = sharp(imagePath)
    .resize(sharp.resizeOption)
    .toBuffer()

  const minifiedImage = imagemin.buffer(resizedImage, {
    plugins: imagemin.plugins
  })

  // Convert image to toString

  // Convert string/buffer to base64

  // setsrc for imageComponent

  // const transformedComponent = setSrc(imageComponent)(optimizedURI)

  // return transformedComponent

  //
  // const svg = filePath[0].data.toString('utf8')
  //
  // const optimizedURI = `"${svgToMiniDataURI(svg)}"`
  //
}

export default svgPlaceholder
