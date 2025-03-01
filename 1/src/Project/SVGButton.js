import React, { useRef, useState } from 'react'
import { useScreen } from './Screens/ProviderScreen';

export default function SVGButton( props ) {

    const { screen, setScreen } = useScreen();

    const default_bg = useRef( "#DBC1FF" );
    const default_stroke = useRef( "#5E3F89" );

    const [ bgColor, setBgColor ] = useState( default_bg.current );
    const [ strokeColor, setStrokeColor ] = useState( default_stroke.current );
    

    return (
        <button
            onClick={ () => setScreen( props.id ) }
            style={{
                backgroundColor: default_bg.current,
                margin: "8px",
                transition: "all 300ms ease-out",
                border: "none" 
            }}
        >
            <svg 
                onMouseOver={() => { setBgColor( default_stroke.current ); setStrokeColor( "white" ) }}
                onMouseOut={() => { setBgColor( default_bg.current ); setStrokeColor( default_stroke.current ) }}
                style={{ transition: "all 300ms ease-out" }} 
                width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ 
                        transition: "all 300ms ease-out", 
                        stroke: strokeColor, fill: bgColor, pointerEvents: "none", strokeWidth:"4", 
                        strokeLinecap:"round", strokeLinejoin:"round" }}
                        d={props.d}
                        ></path>
                    { props.children }
            </svg>
        </button>
    )
}
