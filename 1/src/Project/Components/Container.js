import React, { useEffect, useState } from 'react';

export default function Container( props ) {
    
    const [ focused, setFocused ] = useState( false );
    const [ filter, setFilter ] = useState( "none" );

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
                    setFilter( "brightness(30%) saturate(40%)" )
                    console.log( 'enter' );
                }}
            onMouseOut={ () => {
                    setFocused( false );
                    setFilter( "none" );
                    console.log( 'leave' );
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
                    <h5 style={{ position: "absolute", bottom: "10px", color: "white" }}>{ props.title }</h5>
                    <span style={{ color: "white" }}>{ props.author }</span>
                    <button></button>
                </div>
                <img style={{ 
                    position: "absolute", right: "20px", height: "30px", width: "30px",
                    backgroundColor: "white", borderRadius: "25px" }}/>
            </div>
            { () => {
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
                } else return <div style={{ width: "100%",
                                height: "100%",
                                transition: "all 300ms ease-out",
                                borderRadius: "20px",
                                opacity: 1,
                                pointerEvents: 'none',        
                                filter: filter }}>
                                    <p>{ props.text_content }</p>
                                </div>
            }}
            
        </div>
    )
};