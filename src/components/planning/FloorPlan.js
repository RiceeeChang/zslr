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
                    naturalSlideHeight={707}
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
                        <Slide index={0}><div className='floor-card'><img src={require('../../img/floor/R23F.png')} alt='R23F' /></div></Slide>
                        <Slide index={1}><div className='floor-card'><img src={require('../../img/floor/R1F.jpg')} alt='R1F' /></div></Slide>
                        <Slide index={2}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/15F.png')} alt='15F' />
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className='floor-card'>
                                <img src={require('../../img/floor/14F.png')} alt='14F' />
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
                                <img src={require('../../img/floor/2F.png')} alt='2F' />
                            </div>
                        </Slide>
                        <Slide index={6}><div className='floor-card'><img src={require('../../img/floor/1F.png')} alt='1F' /></div></Slide>
                        <Slide index={7}><div className='floor-card'><img src={require('../../img/floor/B1F.png')} alt='B1F' /></div></Slide>
                        <Slide index={8}><div className='floor-card'><img src={require('../../img/floor/B2F.png')} alt='B2F' /></div></Slide>
                        <Slide index={9}><div className='floor-card'><img src={require('../../img/floor/B3F.png')} alt='B3F' /></div></Slide>
                    </Slider>
                    <ButtonBack className='invisible'>Back</ButtonBack>
                    <ButtonNext className='invisible'>Next</ButtonNext>
                </div>
                </CarouselProvider>
            </div>

            <Rodal 
                width={1112}
                height={707}
                visible={visibleA}
                onClose={() => setVisibleA(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/A.png')} alt='A room'/>
                <p className="plan-desc">本傢俱配置參考圖係由室內裝潢公司所設計及提供，僅供消費者參考⽰意，除買賣契約另有訂
定外，非屬買賣契約之給付範圍。消費者不得以本參考圖之配置，請求建商、代銷公司給付之
或主張任何權利。本⼾房屋之實際建材設備應以依申請使⽤執照複本圖⾯為準。</p>
                <a className='online' target='_blank' rel="noopener noreferrer" href='https://720yun.com/t/bfvkshfbd29?scene_id=50231611'><img src={require('../../img/floor/online.png')} alt='online' /></a>
            </Rodal>
            <Rodal 
                width={1112}
                height={707}
                visible={visibleB}
                onClose={() => setVisibleB(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/B.png')} alt='B room'/>
                <p className="plan-desc">本傢俱配置參考圖係由室內裝潢公司所設計及提供，僅供消費者參考⽰意，除買賣契約另有訂
定外，非屬買賣契約之給付範圍。消費者不得以本參考圖之配置，請求建商、代銷公司給付之
或主張任何權利。本⼾房屋之實際建材設備應以依申請使⽤執照複本圖⾯為準。</p>
            </Rodal>
            <Rodal 
                width={1112}
                height={707}
                visible={visibleC}
                onClose={() => setVisibleC(false)}
                showCloseButton={true}
                showMask={false}
                animation='zoom'
                className='modal room'
                >
                <img src={require('../../img/floor/C.png')} alt='C room'/>
                <p className="plan-desc">本傢俱配置參考圖係由室內裝潢公司所設計及提供，僅供消費者參考⽰意，除買賣契約另有訂
定外，非屬買賣契約之給付範圍。消費者不得以本參考圖之配置，請求建商、代銷公司給付之
或主張任何權利。本⼾房屋之實際建材設備應以依申請使⽤執照複本圖⾯為準。</p>
            </Rodal>
        </div>
    )
}

export default FloorPlan;