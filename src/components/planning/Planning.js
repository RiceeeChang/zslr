import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Team from './Team'
import Appearance from './Appearance'


const Planning = (props) => {

    return (
        <BrowserRouter>
            <div className='second-menu'>
                <div className='menu-item'>
                    <NavLink to='architectual-planning'>建築團隊</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='architectual-appearance'>建築外觀</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='public-utilities'>公共設施</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='device'>建材設備</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='archi-features'>工種特色</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='floor-plan'>平面圖</NavLink>
                </div>
            </div>
            <Switch>
                <Route component={Team}/>
                <Route path='/architectual-appearance' component={Appearance}/>
                <Route path='/archi-feature' component={Feature}/>
                <Route path='/floor-plan' component={FloorPlan}/>
            </Switch>
        </BrowserRouter>
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