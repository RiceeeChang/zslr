import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'

import Service from './Service.js'

import cooperationImage from '../../img/cooperation.webp'

const Management = (props) => {
    const items = [
        { 'name': '服務內涵', 'path': '', 'component': Service},
        { 'name': '合作案例', 'path': '/cooperation', 'component': Cooperate},
    ]

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <SecondMenu items={items} positionClassName='management-menu' url={props.match.url} />
            <SecondSwitch items={items} url={props.match.url} />
        </BrowserRouter>
    )
}


const Cooperate = (props) => {
    return (
        <img src={cooperationImage} alt='合作案例'/>
    )
}

export default Management;