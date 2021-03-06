import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'


import proGiantImage from '../../img/pro-giant.png'
import cultureImage from '../../img/culture.png'
import lifeImage from '../../img/life.png'
import historyImage from '../../img/history.png'

const About = (props) => {
    const items = [
        { 'name': '保強建設', 'path': '', 'component': Giant},
        { 'name': '文化染整', 'path': 'culture', 'component': Culture},
        { 'name': '生活為名', 'path': 'life', 'component': Life},
        { 'name': '歷年作品', 'path': 'history', 'component': History},
    ]

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <SecondMenu items={items} positionClassName='about-menu' url={props.match.url}/>
            <SecondSwitch items={items} url={props.match.url}/>
        </BrowserRouter>
    )
}

const Giant = (props) => {
    return (
        <div>
            <img className='content-image' src={proGiantImage} alt='保強建設'/>
        </div>
    )
}
const Culture = (props) => {
    return (
        <div>
            <img className='content-image' src={cultureImage} alt='文化染整'/>
        </div>
    )
}
const Life = (props) => {
    return (
        <div>
            <img className='content-image' src={lifeImage} alt='生活為名'/>
        </div>
    )
}

const History = (props) => {
    return (
        <div>
            <img className='content-image' src={historyImage} alt='歷代作品'/>
        </div>
    )
}

export default About;