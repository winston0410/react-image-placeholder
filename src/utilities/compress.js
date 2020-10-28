import _imagemin from 'imagemin'

const compressImage = async ({ buffer, plugins }) => {
  return await _imagemin.buffer(buffer, {
    plugins: plugins
  })
}

export {
  compressImage
}
