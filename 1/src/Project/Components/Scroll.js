import React, { useRef, useState, useEffect, use } from 'react';
import Container from './Container';
import cat from  '../imgs/cards/cat.jpg';
import cat1 from '../imgs/cards/cat1.jpg';
import cat2 from '../imgs/cards/cat2.jpg';
import dog from '../imgs/cards/dog.jpg';
import dog1 from '../imgs/cards/dog1.jpg';


let CARDS;

export default function Scroll( props ) {
    const [ cardWidth, setCardWidth ] = useState( "200px" );
    const [ padding, setPadding ] = useState( null );
    const [ cardsLoaded, setCardsLoaded ] = useState( false );
    const ref = useRef( null );

    const zoomHandle = () => {
        const { width } = ref.current.getBoundingClientRect();
        let w = Math.max( width * 0.25, 150 );

        const cardAmount = Math.floor( width / w );
        setPadding( ( width - ( cardAmount * w ) ) * 0.5 );

        setCardWidth( `${w}px` );
    };

    useEffect(() => {  
        window.visualViewport.onresize = zoomHandle;
        return () => {
            window.visualViewport.onresize = null;
        }
    });

    useEffect(() => {(
        async () => {
            try {
                const response = await fetch( "https://storage.yandexcloud.net/sharetemp/artworks_data.json" );
                return await response.json()
            }
            catch ( error ) { console.warn( error ); }
        })().then( data => {
            CARDS = Object.values(data);
        }
        )}
    );

    useEffect( () => {
        if ( CARDS !== undefined && !cardsLoaded ) {
            setCardsLoaded( true ); 
            console.log("loaded"); console.log(CARDS.map( (value, index) => value ))
        }
    }, [ cardsLoaded ])
   

    // const CARDS = [
    //     cat,  dog, cat1, dog1, cat2,  cat, dog, cat1, dog1, cat2, 
    // ];

    switch ( cardsLoaded ) {
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
            break;
        default:
            return <p>dff</p>
            break;
    }
};
