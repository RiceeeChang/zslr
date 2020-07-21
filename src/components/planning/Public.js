import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Public = (props) => {

    return (
        <Carousel renderThumbs={(children) => {}}>
            <div>
                <img style={{marginTop: 2, backgroundColor: 'white'}}src={require('../../img/public/01.png')} alt='1'/>
            </div>
            <div>
                <img src={require('../../img/public/02.webp')} alt='2'/>
            </div>
        </Carousel>
    )
}

export default Public;