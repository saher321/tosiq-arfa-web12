import React from 'react'
import { Carousel } from 'react-bootstrap'

const HomeSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={"./image1.jpg"} className='slider-img' height="400px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={"./image1.jpg"} className='slider-img'  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeSlider