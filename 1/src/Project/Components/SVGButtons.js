import React, { useRef, useState } from 'react'
import { useScreen } from '../Screens/ProviderScreen';

export default function SVGButton( props ) {

    const { screen, setScreen } = useScreen();

    function clicked () {
        setScreen( props.id );
        if ( screen == props.id ) {
            setDefaultBg( "#DBC1FF" );
            setDefaultStroke( "#5E3F89" );
        } else {
            setDefaultBg( "#5E3F89" );
            setDefaultStroke( "white" );
        }
    };

    const [ defaultBg, setDefaultBg ] = useState( "#DBC1FF" );
    const [ defaultStroke, setDefaultStroke ] = useState( "#5E3F89" );

    const [ bgColor, setBgColor ] = useState( defaultBg );
    const [ strokeColor, setStrokeColor ] = useState( defaultStroke );
    

    return (
        <button
            onClick={ () =>  clicked() }
            style={{
                backgroundColor: "#DBC1FF",
                margin: "8px",
                transition: "all 300ms ease-out",
                border: "none",
                alignItems: "center",
                alignSelf: "center"
            }}>
            <svg 
                onMouseOver={() => { setBgColor( defaultStroke ); setStrokeColor( "white" ) }}
                onMouseOut={() => { setBgColor( defaultBg ); setStrokeColor( defaultStroke ) }}
                style={{ transition: "all 300ms ease-out" }} 
                width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ 
                        transition: "all 300ms ease-out", 
                        stroke: strokeColor, fill: bgColor, pointerEvents: "none", strokeWidth:"4", 
                        strokeLinecap:"round", strokeLinejoin:"round" }}
                        d={props.d}
                    />
                    { props.children }
            </svg>
        </button>
    )
}

export function SVGButton2Paths ( props ) {

    const { screen, setScreen } = useScreen();

    const [ isClicked, setIsClicked ] = useState( true );

    function clicked () {
        setScreen( props.id );
        if ( screen == props.id ) {
            setDefaultBg( "#DBC1FF" );
            setDefaultStroke( "#5E3F89" );
        } else {
            setDefaultBg( "#5E3F89" );
            setDefaultStroke( "white" );
        }
    };

    const [ defaultBg, setDefaultBg ] = useState( "#DBC1FF" );
    const [ defaultStroke, setDefaultStroke ] = useState( "#5E3F89" );

    const [ bgColor, setBgColor ] = useState( defaultBg );
    const [ strokeColor, setStrokeColor ] = useState( defaultStroke );
    

    return (
        <button
            onClick={ () => clicked() }
            style={{
                backgroundColor: "#DBC1FF",
                margin: "8px",
                transition: "all 300ms ease-out",
                border: "none",
                
            }}>
            <svg 
                onMouseOver={() => { setBgColor( defaultStroke ); setStrokeColor( "white" ) }}
                onMouseOut={() => { setBgColor( defaultBg ); setStrokeColor( defaultStroke ) }}
                style={{ transition: "all 300ms ease-out" }} 
                width="70" height="70" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{
                        transition: "all 300ms ease-out", 
                        fill: bgColor, pointerEvents: "none"
                        }}
                        d={ props.d1 }/>
                    <path style={{ 
                        transition: "all 300ms ease-out", 
                        stroke: strokeColor, 
                        pointerEvents: "none", strokeWidth:"4", 
                        strokeLinecap:"round", strokeLinejoin:"round" 
                        }}
                        d={ props.d2 }/>
            </svg>
        </button>
    )
}
