import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import svgPlaceholder from '../src/index.js'
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

describe('Svg placeholder', function () {
  it('should provide data-uri of the original image as src', function () {
    const Img = ({ src }) => {
      return <img src={src}/>
    }
    act(() => {
      // svgPlaceholder(
      //   <Img src={'./images/example.svg'}/>
      // )

      svgPlaceholder(
        <Img src={'./images/example.jpg'}/>
      )

      // ReactDOM.render(<Img src={'./example.jpg'}/>, rootContainer)
    })

    const renderedBlock = rootContainer.querySelector('img')

    // console.log(
    //   ReactDOM.render(<Img src={'./example.jpg'}/>, rootContainer)
    // )

    // console.log(renderedBlock)
  })

  it('should not throw error if being used with HTML <img> tag', function () {
    // ReactDOM.render(<img src='./example.jpg'/>, rootContainer)
    //
    // const renderedBlock = rootContainer.querySelector('img')
    //
    // svgPlaceholder(
    //   renderedBlock
    // )

    // console.log(renderedBlock)
  })
})
