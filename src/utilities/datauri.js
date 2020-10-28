import DatauriParser from 'datauri/parser'
const parser = new DatauriParser()

const getDataURI = ({ format, buffer }) =>
  parser.format(`.${format}`, buffer).content

// const getDataURI = async ({ imagePath, sharp, imagemin }) => {
//   const resizedImageBuffer = resizeImage({
//     imagePath: imagePath,
//     resizeRatio: sharp.resizeRatio
//   })
//
//   const minifiedImageBuffer = compressImage({
//     buffer: resizedImageBuffer,
//     plugins: imagemin.plugins
//   })
//
//   return _getDataURI({
//     format: await getMetadata(imagePath).format,
//     buffer: minifiedImageBuffer
//   })
// }

export {
  getDataURI
}
