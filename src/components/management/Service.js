import React, { useState } from 'react'
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Service = (props) => {

    const items = [
        {button: require('../../img/01安全管理服務B.png'), content: require('../../img/01安全管理服務.png')},
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
        </div>
    )
}

const MyModal = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <a onClick={() => setVisible(true)}><img src={props.button}/></a>
            <Rodal 
                width='1821'
                height='1025'
                visible={visible} 
                onClose={() => setVisible(false)}
                showCloseButton={false}
                animation='rotate'
                className='modal'
                >
                <img src={props.content}/>
            </Rodal>
        </div>
    )
}


export default Service;