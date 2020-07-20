import React, { useState } from 'react'
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Service = (props) => {

    const items = [
        {button: require('../../img/service/01B.webp'), content: require('../../img/service/01.webp')},
        {button: require('../../img/service/02B.webp'), content: require('../../img/service/02.webp')},
        {button: require('../../img/service/03B.webp'), content: require('../../img/service/03.webp')},
        {button: require('../../img/service/04B.webp'), content: require('../../img/service/04.webp')},
        {button: require('../../img/service/05B.webp'), content: require('../../img/service/05.webp')},
        {button: require('../../img/service/06B.webp'), content: require('../../img/service/06.webp')},
        {button: require('../../img/service/07B.webp'), content: require('../../img/service/07.webp')},
        {button: require('../../img/service/08B.webp'), content: require('../../img/service/08.webp')},
        {button: require('../../img/service/09B.webp'), content: require('../../img/service/09.webp')},
        {button: require('../../img/service/10B.webp'), content: require('../../img/service/10.webp')},
        {button: require('../../img/service/11B.webp'), content: require('../../img/service/11.webp')},
        {button: require('../../img/service/12B.webp'), content: require('../../img/service/12.webp')},
    ]

    return (
        <div className="content service">
            <div className='title'>精緻尊榮新生活</div>
            <div className='subtitle'>中山里仁十二大項精緻社區管理服務</div>
            <div className="buttons">
            {
                items.map((item, i) => (
                    <MyModal key={i} button={item.button} content={item.content} />
                ))
            }
            </div>
            <div className='subtitle2'>MANAGEMENT SERVICE</div>
        </div>
    )
}

const MyModal = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button className='modal-button' onClick={() => setVisible(true)}><img src={props.button} alt='service'/></button>
            <Rodal 
                width={1821}
                height={1025}
                visible={visible} 
                onClose={() => setVisible(false)}
                showCloseButton={false}
                animation='rotate'
                className='modal'
                >
                <img src={props.content} alt='service'/>
            </Rodal>
        </div>
    )
}


export default Service;