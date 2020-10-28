import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import {
  WithPlaceholder
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

describe('Svg placeholder', function () {
  it('should provide data-uri of the original image as src', function () {
    const imagePath = './images/example.jpg'
    const Img = ({ src, dataSrc }) => {
      return <img src={src} data-src={dataSrc}/>
    }

    const imgWithPlaceholder = setImagePlaceholder()(
      <Img src={imagePath} />
    )

    // const Test = () => <Img />

    // const test2 = {
    //   ...test,
    //   props: {
    //     src: 'hello'
    //   }
    // }

    // console.log(imgWithPlaceholder)
    //
    // console.log(test2)

    //
    // console.log(<Img />)
    //
    console.log(imgWithPlaceholder)

    ReactDOM.render(imgWithPlaceholder, rootContainer)

    // const renderedBlock = rootContainer.querySelector('img')
    //
    // expect(renderedBlock).to.have.attribute('src')
    // expect(renderedBlock).to.have.attribute('data-src', imagePath)
  })

  it('should not throw error if being used with HTML <img> tag', function () {

  })
})
