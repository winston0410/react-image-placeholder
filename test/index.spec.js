import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import {
  withPlaceholder
} from '../src/index.js'
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
require('global-jsdom')()

let rootContainer

beforeEach(function () {
  rootContainer = document.createElement('div')
  document.body.appendChild(rootContainer)
})

afterEach(function () {
  document.body.removeChild(rootContainer)
  rootContainer = null
})

describe('Image placeholder', function () {
  it('should provide data-uri of the original image as src', function () {
    const imagePath = './images/example.jpg'
    const ImgTemplate = ({ ...attr }) => {
      return <img {...attr}/>
    }

    const Img = withPlaceholder(
      ImgTemplate
    )

    ReactDOM.render(<Img src={imagePath}/>, rootContainer)
    const renderedBlock = rootContainer.querySelector('img')

    console.log(renderedBlock)

    // expect(renderedBlock).to.have.attribute('src')
    expect(renderedBlock).to.have.attribute('data-src', imagePath)
  })

  it('should not run and transform if running in client-side', function () {

  })
})
