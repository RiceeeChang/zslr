import React, { useState } from 'react'
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Service = (props) => {

    const items = [
        {button: require('../../img/service/01B.png'), content: require('../../img/service/01.png')},
        {button: require('../../img/service/02B.png'), content: require('../../img/service/02.png')},
        {button: require('../../img/service/03B.png'), content: require('../../img/service/03.png')},
        {button: require('../../img/service/04B.png'), content: require('../../img/service/04.png')},
        {button: require('../../img/service/05B.png'), content: require('../../img/service/05.png')},
        {button: require('../../img/service/06B.png'), content: require('../../img/service/06.png')},
        {button: require('../../img/service/07B.png'), content: require('../../img/service/07.png')},
        {button: require('../../img/service/08B.png'), content: require('../../img/service/08.png')},
        {button: require('../../img/service/09B.png'), content: require('../../img/service/09.png')},
        {button: require('../../img/service/10B.png'), content: require('../../img/service/10.png')},
        {button: require('../../img/service/11B.png'), content: require('../../img/service/11.png')},
        {button: require('../../img/service/12B.png'), content: require('../../img/service/12.png')},
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