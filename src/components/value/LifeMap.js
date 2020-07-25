import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

const LifeMap = (props) => {

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <Switch>
                <Route exact path="/lot-value/life-map/" component={All}/>
                <Route path="/lot-value/life-map/coffee" component={Coffee} />
                <Route path="/lot-value/life-map/shopping" component={Shopping} />
                <Route path="/lot-value/life-map/food" component={Food} />
            </Switch>
        </BrowserRouter>
    )
}

const All = (props) => {
    return (
        <div className="content life-map all">
            <NavLink className='title' to='/lot-value/life-map/'></NavLink>
            <NavLink className='coffee-button' to="/lot-value/life-map/coffee"><img src={require('../../img/life_map/coffee.png')} alt="coffee" /></NavLink>
            <NavLink className='shopping-button' to="/lot-value/life-map/shopping"><img src={require('../../img/life_map/shopping.png')} alt="shopping" /></NavLink>
            <NavLink className='food-button' to="/lot-value/life-map/food"><img src={require('../../img/life_map/food.png')} alt="food" /></NavLink>
        </div>
    )
}

const Coffee = (props) => {
    return (
        <div className="content life-map coffee">
            <NavLink className='title' to='/lot-value/life-map/'></NavLink>
            <NavLink className='coffee-button' to="/lot-value/life-map/coffee"><img src={require('../../img/life_map/coffee.png')} alt="coffee" /></NavLink>
            <NavLink className='shopping-button' to="/lot-value/life-map/shopping"></NavLink>
            <NavLink className='food-button' to="/lot-value/life-map/food"></NavLink>
            <div className="mdot m-p1"></div>
            <div className="mdot m-p2"></div>
            <div className="mdot m-p3"></div>
            <div className="mdot m-p4"></div>
            <div className="mdot m-p5"></div>
            <div className="mdot m-p6"></div>
            <div className="mdot m-p7"></div>
            <div className="mdot m-p8"></div>
            <div className="mdot m-p9"></div>
            <div className="mdot m-p10"></div>
            <div className="mdot m-p11"></div>
            <div className="mdot m-p12"></div>
            <div className="mdot m-p13"></div>
            <div className="mdot m-p14"></div>
            <div className="mdot m-p15"></div>
            <div className="mdot m-p16"></div>
            <div className="mdot m-p17"></div>
            <div className="mdot m-p18"></div>
        </div>
    )
}

const Shopping = (props) => {
    return (
        <div className="content life-map shopping">
            <NavLink className='title' to='/lot-value/life-map/'></NavLink>
            <NavLink className='coffee-button' to="/lot-value/life-map/coffee"></NavLink>
            <NavLink className='shopping-button' to="/lot-value/life-map/shopping"><img src={require('../../img/life_map/shopping.png')} alt="shopping" /></NavLink>
            <NavLink className='food-button' to="/lot-value/life-map/food"></NavLink>
            <div className="mdot m-p19"></div>
            <div className="mdot m-p20"></div>
            <div className="mdot m-p21"></div>
            <div className="mdot m-p22"></div>
            <div className="mdot m-p23"></div>
            <div className="mdot m-p24"></div>
            <div className="mdot m-p25"></div>
            <div className="mdot m-p26"></div>
            <div className="mdot m-p27"></div>
            <div className="mdot m-p28"></div>
            <div className="mdot m-p29"></div>
            <div className="mdot m-p30"></div>
            <div className="mdot m-p31"></div>
            <div className="mdot m-p32"></div>
            <div className="mdot m-p33"></div>
            <div className="mdot m-p34"></div>
        </div>
    )
}

const Food = (props) => {
    return (
        <div className="content life-map food">
            <NavLink className='title' to='/lot-value/life-map/'></NavLink>
            <NavLink className='coffee-button' to="/lot-value/life-map/coffee"></NavLink>
            <NavLink className='shopping-button' to="/lot-value/life-map/shopping"></NavLink>
            <NavLink className='food-button' to="/lot-value/life-map/food"><img src={require('../../img/life_map/food.png')} alt="food" /></NavLink>
            <div className="mdot m-p35"></div>
            <div className="mdot m-p36"></div>
            <div className="mdot m-p37"></div>
            <div className="mdot m-p38"></div>
            <div className="mdot m-p39"></div>
            <div className="mdot m-p40"></div>
            <div className="mdot m-p41"></div>
            <div className="mdot m-p42"></div>
            <div className="mdot m-p43"></div>
            <div className="mdot m-p44"></div>
            <div className="mdot m-p45"></div>
            <div className="mdot m-p46"></div>
            <div className="mdot m-p47"></div>
            <div className="mdot m-p48"></div>
            <div className="mdot m-p49"></div>
            <div className="mdot m-p50"></div>
            <div className="mdot m-p51"></div>
            <div className="mdot m-p52"></div>
            <div className="mdot m-p53"></div>
            <div className="mdot m-p54"></div>
            <div className="mdot m-p55"></div>
            <div className="mdot m-p56"></div>
            <div className="mdot m-p57"></div>
        </div>
    )
}

export default LifeMap;