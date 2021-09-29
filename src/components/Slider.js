import React from 'react'
 
import { ImgComparisonSlider } from '@img-comparison-slider/react';
 
class Slider extends React.Component {
  render () {
 
    return (
      <div>
        <ImgComparisonSlider>
          <img slot="first" src="https://asset-hosting.s3.us-west-2.amazonaws.com/ORCA+Process+Flow+Diagram.svg" />
          <img slot="second" src="https://asset-hosting.s3.us-west-2.amazonaws.com/ORCA+Process+Flow+Diagram.svg" />
        </ImgComparisonSlider>
      </div>
    )
  }
}

export default Slider