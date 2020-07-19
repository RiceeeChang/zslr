import React from 'react'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'

import Team from './Team'
import Appearance from './Appearance'

import publicImage1 from '../../img/公共設施01.png'
import publicImage2 from '../../img/公共設施02.png'
import deviceImage1 from '../../img/建材設備01.png'
import deviceImage2 from '../../img/建材設備02.png'
import deviceImage3 from '../../img/建材設備03.png'
import deviceImage4 from '../../img/建材設備04.png'
import deviceImage5 from '../../img/建材設備05.png'
import deviceImage6 from '../../img/建材設備06.png'
import deviceImage7 from '../../img/建材設備07.png'
import deviceImage8 from '../../img/建材設備08.png'

const Planning = (props) => {
    const items = [
        { 'name': '建築團隊', 'path': '', 'component': Team},
        { 'name': '建築外觀', 'path': '/architectual-appearance', 'component': Appearance},
        { 'name': '公共設施', 'path': '/public-utilities', 'component': Public},
        { 'name': '建材設備', 'path': '/device', 'component': Device},
        { 'name': '工種特色', 'path': '/archi-features', 'component': Feature},
        { 'name': '平面圖', 'path': '/floor-plan', 'component': FloorPlan},
    ]

    return (
        <div>
            <SecondMenu items={items} positionClassName='planning-menu' url={props.match.url} />
            <SecondSwitch items={items} url={props.match.url} />
        </div>
    )
}


const Public = (props) => {
    return (
        <div>
            <img src={publicImage1} alt='公共設施1' />
        </div>
    )
} 

const Device = (props) => {
    return (
        <div>
            <img src={deviceImage1} alt='建材設備1' />
        </div>
    )
}

const Feature = (props) => {
    return (
        <div>
            工種特色 要拉popup
        </div>
    )
}

const FloorPlan = (props) => {
    return (
        <div>
            平面圖 要拉
        </div>
    )
}

export default Planning;