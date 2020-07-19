import React from 'react'
import { NavLink } from 'react-router-dom'

const SecondMenu = (props) => {
    return (
<       div className={`second-menu ${props.positionClassName}`}>
            {
                props.items.map((item, i) => (
                <div key={i} className='menu-item'>
                    <NavLink exact activeClassName='active' to={`${props.url}${item.path}`}>{item.name}</NavLink>
                </div>
                ))
            }
        </div>
    )
}

export default SecondMenu;