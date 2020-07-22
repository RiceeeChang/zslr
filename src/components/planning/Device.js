import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Device = (props) => {

    return (
        <Carousel renderThumbs={(children) => {}}>
            <div>
                <img src={require('../../img/device/01.png')} alt='1'/>
            </div>
            <div>
                <img src={require('../../img/device/02.png')} alt='2'/>
            </div>
            <div>
                <img src={require('../../img/device/03.png')} alt='3'/>
            </div>
            <div>
                <img src={require('../../img/device/04.png')} alt='4'/>
            </div>
            <div>
                <img src={require('../../img/device/05.png')} alt='5'/>
            </div>
            <div>
                <img src={require('../../img/device/06.png')} alt='6'/>
            </div>
            <div>
                <img src={require('../../img/device/07.png')} alt='7'/>
            </div>
            <div>
                <img src={require('../../img/device/08.png')} alt='8'/>
            </div>
        </Carousel>
    )
}

export default Device;