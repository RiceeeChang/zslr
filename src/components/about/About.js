import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'



const About = (props) => {

    return (
        <BrowserRouter>
            <div className='second-menu'>
                <div className='menu-item'>
                    <NavLink to='pro-giant-brand'>保強建設</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='culture'>文化染整</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='life'>生活為名</NavLink>
                </div>
                <div className='divider'></div>
                <div className='menu-item'>
                    <NavLink to='history'>歷年作品</NavLink>
                </div>
            </div>
            <Switch>
                <Route component={Life}/>
                <Route path='/pro-giant-brand' component={Giant}/>
                <Route path='/culture' component={Culture}/>
                <Route path='/life' component={Life}/>
                <Route path='/history' component={History}/>
            </Switch>
        </BrowserRouter>
    )
}

const Giant = (props) => {
    return (
        <div>
            Giant
        </div>
    )
}
const Culture = (props) => {
    return (
        <div>
            Culture
        </div>
    )
}
const Life = (props) => {
    return (
        <div>
            Life
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