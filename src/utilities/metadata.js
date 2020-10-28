import _sharp from 'sharp'

const getMetadata = async ({ imagePath }) =>
  await _sharp(imagePath).metadata()

export {
  getMetadata
}
