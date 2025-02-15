import React from 'react'
import Container from './Container'
import cat from  './imgs/cards/cat.jpg'
import cat1 from './imgs/cards/cat1.jpg'
import cat2 from './imgs/cards/cat2.jpg'
import dog from './imgs/cards/dog.jpg'
import dog1 from './imgs/cards/dog1.jpg'


export default function Scroll( props ) {
    const CARDS = [
        cat,  dog, cat1, dog1, cat2,  cat, dog, cat1, dog1, cat2, 
    ]
        
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }}>
            { CARDS.map( ( value, index ) => <Container img={ value } key={ index }/>)}
        </div>
    )
}
