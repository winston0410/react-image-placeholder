# React Image SVG Placeholder

[![Known Vulnerabilities](https://snyk.io/test/github/winston0410/react-image-svg-placeholder/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/react-image-svg-placeholder?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/7e3d3cfecac4a03fc6bd/maintainability)](https://codeclimate.com/github/winston0410/react-image-svg-placeholder/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7e3d3cfecac4a03fc6bd/test_coverage)](https://codeclimate.com/github/winston0410/react-image-svg-placeholder/test_coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/f51046f798474189b269e64c1df4d583)](https://www.codacy.com/gh/winston0410/react-image-svg-placeholder/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/react-image-svg-placeholder&utm_campaign=Badge_Grade)

A React HOC that add a fully optimized base-64 SVG data-url as placeholder to your image component.

## Requirement

This package will transform and return a React component. In order to use this package to transform your component, your component needs to adhere the following rules:

- Take a `src` and `dataSrc` in `props`

- Add `src` and `dataSrc` to an `<img>`

### Minimum component example that met the requirement

```javascript
import React from 'react'

function Img ({ src, dataSrc }) {
  return (
    <img src={src} data-src={dataSrc}/>
  )
}

export default Img
```

## Installation

NPM:

```shell
npm i @blackblock/react-image-svg-placeholder
```

Yarn:

```shell
yarn add @blackblock/react-image-svg-placeholder
``` 

<!-- ## How does it work? This plugin will do the followings to generate the tiniest placeholder for you: - Step 0: Get your original image path from `src` or `data-src` - Step 1: Convert your image into svg - Step 2: Optimize the svg placeholder with [SVGO](https://github.com/svg/svgo) - Step 3: Turn the svg placeholder to an optimized base64 data URI with [mini-svg-data-uri](https://www.npmjs.com/package/mini-svg-data-uri) - Step 4: Set the optimized data-uri as the value of the `src` and the original image path as the value of `data-src` of your component. -->
