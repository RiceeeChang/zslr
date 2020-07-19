import React from 'react'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'


import proGiantImage from '../../img/pro-giant.png'
import cultureImage from '../../img/文化染整.png'
import lifeImage from '../../img/生活為名.png'

const About = (props) => {
    const items = [
        { 'name': '保強建設', 'path': '', 'component': Giant},
        { 'name': '文化染整', 'path': '/culture', 'component': Culture},
        { 'name': '生活為名', 'path': '/life', 'component': Life},
        { 'name': '歷年作品', 'path': '/history', 'component': History},
    ]

    return (
        <div>
            <SecondMenu items={items} positionClassName='about-menu' url={props.match.url}/>
            <SecondSwitch items={items} url={props.match.url}/>
        </div>
    )
}

const Giant = (props) => {
    return (
        <div>
            <img src={proGiantImage} alt='保強建設'/>
        </div>
    )
}
const Culture = (props) => {
    return (
        <div>
            <img src={cultureImage} alt='文化染整'/>
        </div>
    )
}
const Life = (props) => {
    return (
        <div>
            <img src={lifeImage} alt='生活為名'/>
        </div>
    )
}

const History = (props) => {
    return (
        <div>
            歷年作品 popup 
        </div>
    )
}

export default About;