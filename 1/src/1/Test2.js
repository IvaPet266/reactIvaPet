import React from 'react'

export default function Test2( props ) {
    return (
        <div style={ { background: "wheat" } }>
            <p> { props.animals[ props.animals.length-1 ] } </p>
        </div>
    )
}
