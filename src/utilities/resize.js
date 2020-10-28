import _sharp from 'sharp'

const resizeImage = async ({ imagePath, resizeRatio, metadata }) => {
  const resizeWidth = Math.round(metadata.width * resizeRatio)

  return await _sharp(imagePath)
    .resize({ width: resizeWidth })
    .toBuffer()
}

export {
  resizeImage
}
