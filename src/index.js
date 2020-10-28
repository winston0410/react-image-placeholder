import React from 'react'

import {
  getSrc,
  setSrc
} from './utilities/_Helper.js'

import {
  getDataURI as _getDataURI
} from './utilities/datauri.js'

import {
  compressImage
} from './utilities/compress.js'

import {
  resizeImage
} from './utilities/resize.js'

import {
  getMetadata
} from './utilities/metadata.js'

import {
  defaultWhenEmpty
} from '@blackblock/common-utilities'

const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const defaultOptions = {
  imagemin: {
    plugins: [
      imageminMozjpeg(),
      imageminPngquant()
    ]
  },
  sharp: {
    resizeRatio: 0.05
  }
  // resizeCallback: '',
  // compressionCallback: ''
}

const getDataURI = async ({ imagePath, sharp, imagemin }) => {
  const metadata = await getMetadata({
    imagePath: imagePath
  })

  const resizedBuffer = await resizeImage({
    imagePath: imagePath,
    resizeRatio: sharp.resizeRatio,
    metadata: metadata
  })
  //
  console.log(resizedBuffer)

  const compressedBuffer = await compressImage({
    buffer: resizedBuffer,
    plugins: []
  })

  console.log(compressedBuffer)

  const dataURI = getDataURI({
    format: metadata.format,
    buffer: compressedBuffer
  })
}

const setImagePlaceholder = ({ imagemin, sharp, resizeCallback, compressionCallback } = defaultOptions) => (imageComponent) => {
  const imagePath = getSrc(imageComponent)

  // const compressImage = defaultWhenEmpty(_compressImage)(compressionCallback)
  //
  // const resizeImage = defaultWhenEmpty(_resizeImage)(resizeCallback)

  // const dataURI = getDataURI({
  //   imagePath: imagePath,
  //   sharp: {
  //     resizeRatio: 0.05
  //   },
  //   imagemin: {
  //     plugins: []
  //   }
  //
  // })

  // const transformedComponent = {
  //   ...imageComponent,
  //   props: {
  //     src: data,
  //     dataSrc: imagePath
  //   }
  // }
  //
  // return transformedComponent
}

export default setImagePlaceholder
