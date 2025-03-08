import React, { useEffect, useState } from 'react';

export default function Container( props ) {
    
    const [ focused, setFocused ] = useState( false );
    const [ filter, setFilter ] = useState( "none" );

    const margin = 10;

    const defaultStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center",
        borderRadius: "20px",
        transition: "all 300ms ease-out",
        opacity: 1
    }

    let style = {   
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center",
        borderRadius: "20px",
        transition: "all 300ms ease-out",
        opacity: 1,
        pointerEvents: 'none',        
    };

    return (
        <div 
            style={{
                display: "inline-block", /* ? */
                background: "grey",
                overflow: "hidden",
                width: `${ props.width - margin }px`,
                margin: `${ margin * 0.25 }px ${ margin * 0.5 }px`,
                maxHeight: "250px",
                maxWidth: "200px",
                position: "relative",
                borderRadius: "20px",
            }}    
            onMouseEnter={ () => {
                    setFocused( true );
                    setFilter( "brightness(30%) saturate(40%)" )
                    console.log( 'enter', style );
                }}
            onMouseOut={ () => {
                    setFocused( false );
                    setFilter( "none" );
                    console.log( 'leave', style );
                }}
            onClick={() => {console.log("card")}}
            >            
            <div 
                style={{ 
                    padding: "7px",
                    position: "absolute",
                    bottom: "5px",
                    width: "100%",
                    zIndex: 1,
                    pointerEvents: 'none',
                    transition: "opacity 300ms ease-out",
                    opacity: Number( focused ),
                    display: "flex",
                    flexDirection: "row",
                }}>
                <div style={{ display: "flex", flexDirection: "column", padding: "3px" }}>
                    <h5 style={{ position: "absolute", bottom: "10px", color: "white" }}>Heading</h5>
                    <span style={{ color: "white" }}>UserName</span>
                    <button></button>
                </div>
                <img style={{ 
                    position: "absolute", right: "20px", height: "30px", width: "30px",
                    backgroundColor: "white", borderRadius: "25px" }}/>
            </div>
            <img 
                style={{ ...style, filter: filter }} 
                src={ props.img }></img>
        </div>
    )
};