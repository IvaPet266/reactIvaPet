import React, { useRef, useState } from 'react';
import { useScreen } from '../Screens/ProviderScreen';
// import useSelector from 'react-redux';                                                   //!

export default function SVGButton( props ) {

    const { screen, setScreen } = useScreen();

    // const bg_inactive = useSelector( ( state ) => state.colorTheme.fill_inactive );       //!   
    // const bg_active = useSelector( ( state ) => state.colorTheme.fill_active );           //!
    // const stroke_inactive = useSelector( ( state ) => state.colorTheme.stroke_inactive ); //!           
    // const stroke_active = useSelector( ( state ) => state.colorTheme.stroke_active );     //!       

    // const bg = useRef( props.id == screen? bg_active: bg_inactive )                       //!
    // const stroke = useRef( props.id == screen? stroke_active: stroke_inactive )           //!

    const [ defaultBg, setDefaultBg ] = useState( bg.current );
    const [ defaultStroke, setDefaultStroke ] = useState( stroke.current );

    const [ bgColor, setBgColor ] = useState( defaultBg );
    const [ strokeColor, setStrokeColor ] = useState( defaultStroke );
    

    return (
        <button
            onClick={ () => setScreen( props.id ) }
            style={{
                backgroundColor: bg_inactive,  //!
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

    // const bg_inactive = useSelector( ( state ) => state.colorTheme.fill_inactive );       //! 
    // const bg_active = useSelector( ( state ) => state.colorTheme.fill_active );           //! 
    // const stroke_inactive = useSelector( ( state ) => state.colorTheme.stroke_inactive ); //!
    // const stroke_active = useSelector( ( state ) => state.colorTheme.stroke_active );     //! 

    // const bg = useRef( props.id == screen? bg_active: bg_inactive );                      //!
    // const stroke = useRef( props.id == screen? stroke_active: stroke_inactive );          //! 

    const [ defaultBg, setDefaultBg ] = useState( bg.current );
    const [ defaultStroke, setDefaultStroke ] = useState( stroke.current );

    const [ bgColor, setBgColor ] = useState( defaultBg );
    const [ strokeColor, setStrokeColor ] = useState( defaultStroke );
    

    return (
        <button
            onClick={ () => setScreen( props.id ) }
            style={{
                background: "transparent",
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
