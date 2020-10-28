import React, { useState } from 'react'
import useSSR from 'use-ssr'
import { useSSE } from 'use-sse'

import {
  getDataURI
} from '../utilities/datauri.js'

import {
  compressImage
} from '../utilities/compress.js'

import {
  resizeImage
} from '../utilities/resize.js'

import {
  getMetadata
} from '../utilities/metadata.js'

import {
  defaultWhenEmpty
} from '@blackblock/common-utilities'

const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const getPlaceholder = ({ imagePath, sharp, imagemin }) => async (setFn, stopFn) => {
  // const compressImage = defaultWhenEmpty(_compressImage)(compressionCallback)
  //
  // const resizeImage = defaultWhenEmpty(_resizeImage)(resizeCallback)

  const metadata = await getMetadata({
    imagePath: imagePath
  })

  const resizedBuffer = await resizeImage({
    imagePath: imagePath,
    resizeRatio: sharp.resizeRatio,
    metadata: metadata
  })

  const compressedBuffer = await compressImage({
    buffer: resizedBuffer,
    plugins: []
  })

  const dataURI = getDataURI({
    format: metadata.format,
    buffer: compressedBuffer
  })

  setFn(dataURI)
  stopFn(true)
}

// imagemin, sharp, resizeCallback, compressionCallback,
const defaultOptions = {
  imagemin: {
    plugins: [

    ]
  },
  sharp: {
    resizeRatio: 0.01
  }
}

const withPlaceholder = (Component) => ({ src, placeholderSetting = defaultOptions, ...attr }) => {
  const [placeholder, setPlaceholder] = useState('')
  const [stopSignal, setStopSignal] = useState(false)
  const { isServer } = useSSR()

  if (isServer) {
    if (!stopSignal) {
      getPlaceholder({
        imagePath: src,
        ...placeholderSetting
      })(setPlaceholder, setStopSignal)
    }
  }

  if (stopSignal) {
    return <Component src={placeholder} data-src={src} {...attr}/>
  }
}

export default withPlaceholder
