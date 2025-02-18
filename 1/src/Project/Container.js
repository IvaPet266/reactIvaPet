import React, { useEffect, useState } from 'react'

let textHoverInst = 'card-text'
let imageHoverInst = 'card-image'

function mouseIn () {
    textHoverInst = 'card-text-hover';
    imageHoverInst = 'card-image-hover';
    console.log( `IN: ${ textHoverInst } | ${ imageHoverInst }` );
}
function mouseOut () {
    textHoverInst = 'card-text';
    imageHoverInst = 'card-image';
    console.log( `OUT: ${ textHoverInst } | ${ imageHoverInst }` );
}

export default function Container( props ) {
    
    const [ background, setBackground ] = useState( "#5E3F89" )


    // useEffect(() => {
    //     const img = new Image()
    //     img.src = props.img[ 0 ]

    //     // setBackground( props.img[ 1 ] )

    //     // setPortrait( img.width < img.height )
    // })


    return (
        <div style={{
            minWidth: "150px",
            maxWidth: "200px",
            margin: "2.5px",
            minHeight: "200px",
            maxHeight: "300px",
            position: "relative",
            // overflow: "hidden",
            borderRadius: "20px",
            background: "grey",
            display: "flex", /* ? */
        }}>
            <div onMouseEnter={ () => { mouseIn() } }
                onMouseLeave={ () => { mouseOut() } }
                className={ textHoverInst }>
                <h5 style={{ position: "absolute", bottom: "0px" }}>Heading</h5>
                <span>description</span>
                <button></button>
            </div>
            <img 
                onMouseEnter={ () => { mouseIn() } }
                onMouseLeave={ () => { mouseOut() } }
                className={ imageHoverInst } style={{   
                objectFit: "cover",
                objectPosition: "center center",
                borderRadius: "20px"
            }} src={ props.img }></img>
        </div>
    )
}