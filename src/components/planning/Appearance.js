import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

const Appearance = (props) => {

    return (
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <Switch >
                <Route exact path="/architectual-planning/architectual-appearance" component={Page1}></Route>
                <Route exact path="/architectual-planning/architectual-appearance/2" component={Page2}></Route>
            </Switch>
        </BrowserRouter>
        
    )
}

const Page1 = (props) => {
    return (
        <div className='page1'>
            <img className='title' src={require('../../img/appearance/ap01.png')} alt='title' />
            <div>
                <InnerImageZoom className='south-west' src={require('../../img/appearance/south_west.png')} zoomSrc={require('../../img/appearance/south_west_zoom.png')} />
                <InnerImageZoom src={require('../../img/appearance/north_east.png')} zoomSrc={require('../../img/appearance/north_east_zoom.png')} />
            </div>
            <NavLink to="/architectual-planning/architectual-appearance/2"><span className="next-button"></span></NavLink>
        </div>
    )
}
const Page2 = (props) => {
    return (
        <div>
            <NavLink to="/architectual-planning/architectual-appearance"><span className="prev-button"></span></NavLink>
            <img style={{width: "100vw"}} src={require('../../img/appearance/02.png')} alt='2'/>
        </div>
    )
}

export default Appearance;