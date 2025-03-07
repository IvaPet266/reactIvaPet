import React, { useRef, useState, useEffect } from 'react';
import Container from './Container';
import cat from  '../imgs/cards/cat.jpg';
import cat1 from '../imgs/cards/cat1.jpg';
import cat2 from '../imgs/cards/cat2.jpg';
import dog from '../imgs/cards/dog.jpg';
import dog1 from '../imgs/cards/dog1.jpg';


export default function Scroll( props ) {
    const [ cardWidth, setCardWidth ] = useState( "200px" );
    const [ padding, setPadding ] = useState( null );
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
    })

   

    const CARDS = [
        cat,  dog, cat1, dog1, cat2,  cat, dog, cat1, dog1, cat2, 
    ];

        
    return (
        <div 
            ref={ ref }
            style={{
                padding: `0 ${padding}`,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
            { CARDS.map( ( value, index ) => <Container img={ value } key={ index }/>)}
        </div>
    )
};
