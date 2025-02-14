import React, { useEffect, useState } from 'react'

export default function Container( props ) {

    const [ background, setBackground ] = useState( "#5E3F89" )


    useEffect(() => {
        const img = new Image()
        img.src = props.img[ 0 ]

        setBackground( props.img[ 1 ] )

        // setPortrait( img.width < img.height )
    })

    return (
        <div style={{
            minWidth: "150px",
            maxWidth: "200px",
            margin: "2.5px",
            minHeight: "200px",
            maxHeight: "300px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            background: background,
            display: "flex",
        }}>
            <div className='card-text'>
                <h5 style={{ position: "absolute", bottom: "0px" }}>Heading</h5>
                <span>description</span>
                <button></button>
            </div>
            <img className="card-image" style={{             
                objectFit: "cover",
                objectPosition: "80% 60%",
                borderRadius: "20px"
            }} src={ props.img[ 0 ] }></img>
        </div>
    )
}