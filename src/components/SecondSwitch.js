import React from 'react'
import { Switch, Route } from 'react-router-dom'

const SecondSwitch = (props) => {
    return (
        <div className='second-switch'>
            <Switch>
            {
                props.items.map((item, i) => (
                    <Route key={i} exact={true} path={`${props.url}${item.path}`} component={item.component}/>
                ))
            }
            </Switch>
        </div>
    )
}

export default SecondSwitch