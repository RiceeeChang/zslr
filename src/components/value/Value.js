import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'


const Value = (props) => {

    return (
        <BrowserRouter>
            <div className='second-menu'>
                <div className='menu-item'>
                    <NavLink to='lot-value'>未來啟航</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='national'>國際盛宴</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='life-value'>生活價值</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='culture-environment'>文創氛圍</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='life-walking'>日常散策</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='life-map'>生活機能圖</NavLink>
                </div>
            </div>
            <Switch>
                <Route component={Future}/>
                <Route path='/national' component={National}/>
                <Route path='/life-value' component={LifeValue}/>
                <Route path='/culture-environment' component={CultureEnv}/>
                <Route path='/life-walking' component={LifeWalking}/>
                <Route path='/life-map' component={LifeMap}/>
            </Switch>
        </BrowserRouter>
    )
}

const Future = (props) => {
    return (
        <div>
            Future
        </div>
    )
}
const National = (props) => {
    return (
        <div>
            National
        </div>
    )
}
const LifeValue = (props) => {
    return (
        <div>
            Life Value
        </div>
    )
}
const CultureEnv = (props) => {
    return (
        <div>
            CultureEnv
        </div>
    )
}
const LifeWalking = (props) => {
    return (
        <div>
            Life Walking
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