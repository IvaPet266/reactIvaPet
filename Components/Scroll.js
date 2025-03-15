import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import useSelector from 'react-redux';   //!
import Container from './Card';
import cat from  '../imgs/cards/cat.jpg';
import cat1 from '../imgs/cards/cat1.jpg';
import cat2 from '../imgs/cards/cat2.jpg';
import dog from '../imgs/cards/dog.jpg';
import dog1 from '../imgs/cards/dog1.jpg';



export default function Scroll( props ) {
    const [ cardWidth, setCardWidth ] = useState( "200px" );
    const [ padding, setPadding ] = useState( null );
    const [ CARDS, setCARDS ] = useState( null );
    const ref = useRef( null );

    const textColor = useSelector( ( state ) => state.colorTheme.fill_inactive ); //!

    const zoomHandle = () => {
        const { width } = ref.current.getBoundingClientRect();
        let w = Math.max( width * 0.25, 150 );

        const cardAmount = Math.floor( width / w );
        setPadding( ( width - ( cardAmount * w ) ) * 0.5 );

        setCardWidth( `${w}px` );
    };

    useLayoutEffect(() => {  
        window.visualViewport.addEventListener( "resize", zoomHandle );
        return () => {
            window.visualViewport.removeEventListener( "resize", zoomHandle );
        }
    }, []);

    useEffect(() => {(
        async () => {
            try {
                const response = await fetch( "https://storage.yandexcloud.net/sharetemp/artworks_data.json" );
                return await response.json()
            }
            catch ( error ) { console.warn( error ); }
        })().then( data => {
            setCARDS( Object.values( data ) );
        }
        )}, []
    );

    switch ( CARDS !== null ) {
        case true:
            console.log("cards");
            return <div 
                    ref={ ref }
                    style={{
                        padding: `0 ${ padding }`,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>
                    { CARDS.map( ( value, index ) => <Container 
                                key={ index } img={ value[ "image" ] } 
                                title={ value[ "title" ] } author={ value[ "author" ] }
                                category={ value[ "category" ] }
                                text_content={ value[ "text_content" ] }/> ) }
                </div>
        default:
            return <p style={{ color: textColor }}>Wait a minute!</p> //!
    }
};
