import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

const Management = (props) => {

    return (
        <BrowserRouter>
            <div className='second-menu'>
                <div className='menu-item'>
                    <NavLink to='property-management'>服務內涵</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='cooperate'>合作案例</NavLink>
                </div>
            </div>
            <Switch>
                <Route component={Service}/>
                <Route path='/cooperate' component={Cooperate}/>
            </Switch>
        </BrowserRouter>
    )
}

const Service = (props) => {
    return (
        <div>服務內涵 popup</div>
    )
}
const Cooperate = (props) => {
    return (
        <div>Cooperate</div>
    )
}

export default Management;