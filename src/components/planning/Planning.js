import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SecondMenu from '../SecondMenu'
import SecondSwitch from '../SecondSwitch'

import Team from './Team'
import Appearance from './Appearance'
import Public from './Public'
import Device from './Device'
import Feature from './Feature'
import FloorPlan from './FloorPlan'

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
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <SecondMenu items={items} positionClassName='planning-menu' url={props.match.url} />
            <SecondSwitch items={items} url={props.match.url} />
        </BrowserRouter>
    )
}

export default Planning;