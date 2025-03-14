import React, { useEffect, useState } from 'react';

export default function Container( props ) {
    
    const [ focused, setFocused ] = useState( false );
    const [ filter, setFilter ] = useState( "none" );
    const [ textFilter, setTextFilter ] = useState( "none" );
    const [ textStyle, setTextStyle ] = useState( { color: "black", background: "transparent" } );

    const margin = 10;

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
                    setFilter( "brightness(30%) saturate(40%)" );
                    setTextFilter( "brightness(30%) contrast(30%)" );                       
                    setTextStyle( { color: "lightgrey"})
                    console.log( 'enter' );
                }}
            onMouseOut={ () => {
                    setFocused( false );
                    setFilter( "none" );
                    setTextFilter( "none" );                                    
                    setTextStyle( { color: "black" } );
                    console.log( 'leave' );
                }}
            onClick={() => {console.log("card")}}>            
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
                    <h5 style={{ position: "absolute", bottom: "10px", color: "white" }}>{ props.title }</h5>
                    <span style={{ color: "white" }}>{ props.author }</span>
                    <button></button>
                </div>
                <img style={{ 
                    position: "absolute", right: "20px", height: "30px", width: "30px",
                    backgroundColor: "white", borderRadius: "25px" }}/>
            </div>
            { (() => {
                if ( props.category == "ARTWORK" ) {
                    return <img 
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center center",
                            borderRadius: "20px",
                            transition: "all 300ms ease-out",
                            opacity: 1,
                            pointerEvents: 'none',        
                            filter: filter 
                        }} 
                        src={ props.img }/>
                } else {
                    let text;
                    if ( props.text_content.length > 310 ) text = `${ props.text_content.slice( 0, 307 ) }...`
                    else text = props.text_content;
                    return <div style={{ width: "90%",
                        height: "100%",
                        transition: "all 300ms ease-out",
                        borderRadius: "20px",
                        padding: "5px",
                        opacity: 1,
                        pointerEvents: 'none',  
                        alignContent: "center",     
                        filter: textFilter}}>
                            <span style={{ 
                                transition: "all 300ms ease-out", 
                                ...textStyle }}>{ text }</span>
                        </div>}
            })() }
        </div>
    )
};