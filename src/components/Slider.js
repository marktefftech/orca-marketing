import React from 'react'
 
import BeforeAfterSlider from 'react-before-after-slider'
 
class Slider extends React.Component {
  render () {
 
    return (
      <BeforeAfterSlider
        before={"https://asset-hosting.s3.us-west-2.amazonaws.com/ORCA+Process+Flow+Diagram.svg"}
        after={"https://asset-hosting.s3.us-west-2.amazonaws.com/ORCA+Process+Flow+Diagram.svg"}
        width={640}
        height={480}
      />
    )
  }
}

export default Slider