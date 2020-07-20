import React, { useState }  from 'react'

import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Team = (props) => {
    const items = [
        {button: require('../../img/team/team1.webp'), content: require('../../img/team/十方聯合建築師事務所.webp')},
        {button: require('../../img/team/team2.webp'), content: require('../../img/team/六國景觀設計有限公司.webp')},
        {button: require('../../img/team/team3.webp'), content: require('../../img/team/永興土木聯合技師事務所.webp')},
    ]

    return (
        <div className='content team'>
        {
            items.map((item, i) => (
                <MyModal key={i} button={item.button} content={item.content}/>
            ))
        }
        </div>
    )
}

const MyModal = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button className='modal-button' onClick={() => setVisible(true)}><img src={props.button} alt='team'/></button>
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

export default Team;