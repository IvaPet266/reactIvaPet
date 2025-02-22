import React, { useEffect, useState } from 'react';

export default function Container( props ) {
    
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
        opacity: 1
    };

    return (
        <div 
            style={{
                display: "inline-block", /* ? */
                background: "grey",
                overflow: "hidden",
                width: `${ props.width - margin }px`,
                margin: `${ margin * 0.25 }px ${ margin }px`,
                maxHeight: "250px",
                maxWidth: "200px",
                position: "relative",
                borderRadius: "20px",
            }}>
            <div 
                style={{ 
                    padding: "7px",
                    position: "absolute",
                    bottom: "5px",
                    zIndex: 1,
                }}>
                <h5 style={{ position: "absolute", bottom: "0px" }}>Heading</h5>
                <span>description</span>
                <button></button>
            </div>
            <img 
                onMouseEnter={ () => {
                    let { transition, width, height, ...rest } = defaultStyle;
                    style = { ...rest, transform: "scale( 0.9 )", opacity: 0.7 } 
                    console.log('enter', style);
                }}
                onMouseLeave={ () => {
                    style = defaultStyle;
                    console.log('leave', style);
                }}
                style={ style } 
                src={ props.img }></img>
        </div>
    )
};