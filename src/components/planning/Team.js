import React, { useState }  from 'react'

import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const Team = (props) => {
    const items = [
        {button: require('../../img/team/01B.png'), content: require('../../img/team/01.png')},
        {button: require('../../img/team/02B.png'), content: require('../../img/team/02.png')},
        {button: require('../../img/team/03B.png'), content: require('../../img/team/03.png')},
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
                width={863}
                height={444}
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