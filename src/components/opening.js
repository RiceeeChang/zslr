import React from 'react'

const Opening = (props) => {

    return (
        <div>
            <p>count: {props.count}</p>
            <button onClick={()=>props.setCount(props.count+1)}> + </button>
        </div>
    )
}

export default Opening;