import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'

import futureImage from '../../img/未來啟航.png'
import nationalImage from '../../img/國際盛宴.png'
import lifevalueImage from '../../img/生活價值.png'
import cultureenvImage from '../../img/文創氛圍.png'
import lifewalkingImage from '../../img/日常散策.png'


const Value = (props) => {
    const items = [
        { 'name': '未來啟航', 'path': '', 'component': Future},
        { 'name': '國際盛宴', 'path': '/national', 'component': National},
        { 'name': '生活價值', 'path': '/life-value', 'component': LifeValue},
        { 'name': '文創氛圍', 'path': '/culture-environment', 'component': CultureEnv},
        { 'name': '日常散策', 'path': '/life-walking', 'component': LifeWalking},
        { 'name': '生活機能圖', 'path': '/life-map', 'component': LifeMap},
    ]

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <SecondMenu items={items} positionClassName='value-menu' url={props.match.url} />
            <SecondSwitch items={items} url={props.match.url} />
        </BrowserRouter>
    )
}

const Future = (props) => {
    return (
        <div>
            <img src={futureImage} alt='未來啟航'/>
        </div>
    )
}
const National = (props) => {
    return (
        <div>
            <img src={nationalImage} alt='國際盛宴'/>
        </div>
    )
}
const LifeValue = (props) => {
    return (
        <div>
            <img src={lifevalueImage} alt='生活價值'/>
        </div>
    )
}
const CultureEnv = (props) => {
    return (
        <div>
            <img src={cultureenvImage} alt='文創氛圍'/>
        </div>
    )
}
const LifeWalking = (props) => {
    return (
        <div>
            <img src={lifewalkingImage} alt='日常散策'/>
        </div>
    )
}
const LifeMap = (props) => {
    return (
        <div>
            生活機能圖 拉板
        </div>
    )
}

export default Value;