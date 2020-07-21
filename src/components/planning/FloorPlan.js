import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const FloorPlan = (props) => {

    return (
        <div className='content'>
            <div className='floor-plan'>
                <div className='title'>
                    <h1>平面圖</h1>
                    <h2>FLOOR PLAN</h2>
                </div>
                <CarouselProvider
                    className='floor-carousel'
                    naturalSlideWidth={1650}
                    naturalSlideHeight={1080}
                    totalSlides={10}
                    currentSlide={6}
                    orientation='vertical'>
                <div>
                    <table><tbody>
                        <tr><td><Dot className='dot' slide={0}>R3F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={0}>R2F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={1}>R1F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={2}>15F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={3}>14F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={4}>3F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={5}>2F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={6}>1F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={7}>B1F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={8}>B2F</Dot></td></tr>
                        <tr><td><Dot className='dot' slide={9}>B3F</Dot></td></tr>
                    </tbody></table>
                </div>
                <div class='sliders'>
                    <Slider>
                        <Slide index={0}>R2F</Slide>
                        <Slide index={1}>R1F</Slide>
                        <Slide index={2}>15</Slide>
                        <Slide index={3}>14F</Slide>
                        <Slide index={4}>3F</Slide>
                        <Slide index={5}>2F</Slide>
                        <Slide index={6}><ImageWithZoom src={require('../../img/floor/Group325.png')} /></Slide>
                        <Slide index={7}>B1F</Slide>
                        <Slide index={8}>B2F</Slide>
                        <Slide index={9}>B3F</Slide>
                    </Slider>
                    <ButtonBack className='invisible'>Back</ButtonBack>
                    <ButtonNext className='invisible'>Next</ButtonNext>
                
                </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default FloorPlan;