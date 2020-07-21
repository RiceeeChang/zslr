import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Device = (props) => {

    return (
        <Carousel renderThumbs={(children) => {}}>
            <div>
                <img src={require('../../img/device/01.webp')} alt='1'/>
            </div>
            <div>
                <img src={require('../../img/device/02.webp')} alt='2'/>
            </div>
            <div>
                <img src={require('../../img/device/03.webp')} alt='3'/>
            </div>
            <div>
                <img src={require('../../img/device/04.webp')} alt='4'/>
            </div>
            <div>
                <img src={require('../../img/device/05.webp')} alt='5'/>
            </div>
            <div>
                <img src={require('../../img/device/06.webp')} alt='6'/>
            </div>
            <div>
                <img src={require('../../img/device/07.webp')} alt='7'/>
            </div>
            <div>
                <img src={require('../../img/device/08.webp')} alt='8'/>
            </div>
        </Carousel>
    )
}

export default Device;