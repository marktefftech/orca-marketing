import React, { Component } from 'react'
 
import BeforeAfterSlider from 'react-before-after-slider'
 
class Slider extends React.Component {
  render () {
    const before = '/images/logo.png'
    const after = '/images/banner.jpeg'
 
    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={640}
        height={480}
      />
    )
  }
}

export default Slider