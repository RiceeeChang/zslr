import React from 'react'
import { BrowserRouter, Switch, Route, NavLink, withRouter} from 'react-router-dom'

import About from './about/About.js'
import Value from './value/Value.js'
import Management from './management/Management.js'
import Planning from './planning/Planning.js'

import logoFile from '../img/site-logo.png';

const Main = (props) => {

  return (
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <Header />
    <Routes />
  </BrowserRouter>
  )
}

const Routes = withRouter(({location}) => (
  <Switch location={location}>
    <Route exact path='/' component={About}/>
    <Route exact path='/lot-value' component={Value}/>
    <Route exact path='/property-management' component={Management}/>
    <Route exact path='/architectual-planning' component={Planning}/>
  </Switch>
));

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo'><img src={logoFile} alt='中山里仁' /></div>
      <div className='menu'>
        <div className='menu-item'>
          <NavLink exact activeClassName='active' to="/">
            <div className='ch'>關於我們</div>
            <div className='en'>PRO GIANT BRAND</div>
          </NavLink>
        </div>
        <div className='menu-item'>
          <NavLink exact activeClassName='active' to="/lot-value">
            <div className='ch'>地段價值</div>
            <div className='en'>LOT VALUE</div>
          </NavLink>
        </div>
        <div className='menu-item'>
          <NavLink exact activeClassName='active' to="/property-management">
            <div className='ch'>物業管理</div>
            <div className='en'>PROPERTY MANAGEMENT</div>
          </NavLink>
        </div>
        <div className='menu-item'>
          <NavLink exact activeClassName='active' to="/architectual-planning">
            <div className='ch'>建築規劃</div>
            <div className='en'>ARCHITECTUAL PLANNIHG</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}


export default Main;