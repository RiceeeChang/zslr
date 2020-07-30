import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Appearance = (props) => {

    return (
        <Carousel renderThumbs={(children) => {}}>
            <div>
                <img src={require('../../img/appearance/01.png')} alt='1'/>
            </div>
            <div>
                <img src={require('../../img/appearance/02.png')} alt='2'/>
            </div>
        </Carousel>
    )
}
/*add something*/
export default Appearance;