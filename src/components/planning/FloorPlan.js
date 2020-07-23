import React, { useState } from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


const FloorPlan = (props) => {
    const [visibleA, setVisibleA] = useState(false);
    const [visibleB, setVisibleB] = useState(false);
    const [visibleC, setVisibleC] = useState(false);

    return (
        <div className='content'>
            <div className='floor-plan'>
                <div className='title'>
                    <h1>平面圖</h1>
                    <h2>FLOOR PLAN</h2>
                </div>
                <CarouselProvider
                    className='floor-carousel'
                    naturalSlideWidth={800}
                    naturalSlideHeight={648}
                    totalSlides={10}
                    currentSlide={6}
                    orientation='vertical'>
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
                <div>
                    <Slider>
                        <Slide index={0}><div className='floor-card'><img src={require('../../img/floor/R23F.jpg')} alt='R23F' /></div></Slide>
                        <Slide index={1}><div className='floor-card'><img src={require('../../img/floor/R1F.jpg')} alt='R1F' /></div></Slide>
                        <Slide index={2}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/15F.png')} alt='15F' />
                                <button className='room-button position-15A' onClick={() => setVisibleA(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-15B' onClick={() => setVisibleB(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-15C' onClick={() => setVisibleC(true)}><p className='spot'><span></span></p></button>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/14F.png')} alt='14F' />
                                <button className='room-button position-14A' onClick={() => setVisibleA(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-14B' onClick={() => setVisibleB(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-14C' onClick={() => setVisibleC(true)}><p className='spot'><span></span></p></button>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/3F.png')} alt='3F' />
                                <button className='room-button position-3A' onClick={() => setVisibleA(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-3B' onClick={() => setVisibleB(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-3C' onClick={() => setVisibleC(true)}><p className='spot'><span></span></p></button>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/2F.jpg')} alt='2F' />
                                <button className='room-button position-2A' onClick={() => setVisibleA(true)}><p className='spot'><span></span></p></button>
                                <button className='room-button position-2B' onClick={() => setVisibleB(true)}><p className='spot'><span></span></p></button>
                            </div>
                        </Slide>
                        <Slide index={6}><div className='floor-card'><img src={require('../../img/floor/1F.jpg')} alt='1F' /></div></Slide>
                        <Slide index={7}><div className='floor-card'><img src={require('../../img/floor/B1F.jpg')} alt='B1F' /></div></Slide>
                        <Slide index={8}><div className='floor-card'><img src={require('../../img/floor/B2F.jpg')} alt='B2F' /></div></Slide>
                        <Slide index={9}><div className='floor-card'><img src={require('../../img/floor/B3F.jpg')} alt='B3F' /></div></Slide>
                    </Slider>
                    <ButtonBack className='invisible'>Back</ButtonBack>
                    <ButtonNext className='invisible'>Next</ButtonNext>
                </div>
                </CarouselProvider>
            </div>

            <Rodal 
                width={1024}
                height={648}
                visible={visibleA}
                onClose={() => setVisibleA(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/A.png')} alt='A room'/>
                <a className='online' target='_blank' rel="noopener noreferrer" href='https://720yun.com/t/bfvkshfbd29?scene_id=50231611'><img src={require('../../img/floor/online.png')} alt='online' /></a>
            </Rodal>
            <Rodal 
                width={1024}
                height={648}
                visible={visibleB}
                onClose={() => setVisibleB(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/B.png')} alt='B room'/>
            </Rodal>
            <Rodal 
                width={1024}
                height={648}
                visible={visibleC}
                onClose={() => setVisibleC(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/C.png')} alt='C room'/>
            </Rodal>
        </div>
    )
}

export default FloorPlan;