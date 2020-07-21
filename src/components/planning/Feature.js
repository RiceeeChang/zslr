import React, { useState }  from 'react'

import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Feature = (props) => {

    return (
        <div className='content feature'>
            <div className='buttons'>
                <MyModal background='deep' button={(<p>新日鐵制震壁<br/>黏彈性阻尼系統</p>)} content={require('../../img/feature/01.webp')} />
                <MyModal background='light' button={(<p>1F-2F<br/>地震力最大處<br/>增加ALFA SAFE<br/>耐震系統</p>)} content={require('../../img/feature/02.webp')} />
                <MyModal background='deep' button={(<p>地盤改良</p>)} content={require('../../img/feature/03.webp')} />
                <div className='title'>
                    <h1>工種特色</h1>
                    <h2>BUILDING MATERIAL EQUIPMENT</h2>
                </div>
                <MyModal background='light' button={(<p>淨水器</p>)} content={require('../../img/feature/04.webp')} />
                <MyModal background='deep' button={(<p>綠建築</p>)} content={require('../../img/feature/05.webp')} />
                <MyModal background='light' button={(<p>YKK</p>)} content={require('../../img/feature/06.webp')} />
                <MyModal background='deep' button={(<p>衛浴設備</p>)} content={require('../../img/feature/07.webp')} />
            </div>
        </div>
    )
}

const MyModal = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button className={`feature-button ${props.background}`} onClick={() => setVisible(true)}>{props.button}</button>
            <Rodal 
                width={1821}
                height={1025}
                visible={visible} 
                onClose={() => setVisible(false)}
                showCloseButton={false}
                animation='slideDown'
                className='modal'
                >
                <img src={props.content} alt='team'/>
            </Rodal>
        </div>
    )
}

export default Feature;