import React from 'react'
import Container from './Container'
import cat from  './imgs/cards/cat.jpg'
import cat1 from './imgs/cards/cat1.jpg'
import cat2 from './imgs/cards/cat2.jpg'
import dog from './imgs/cards/dog.jpg'
import dog1 from './imgs/cards/dog1.jpg'


export default function Scroll( props ) {
    const CARDS = [
        [cat, "white"], 
        [dog, "#f3f3f3"], 
        [cat1, "linear-gradient( to right, #f1bbdc, #f3bad9, #ecb2d2, #e3a5c9, #e9adcf )"], 
        [dog1, "linear-gradient( to bottom, #c47748, #cb7c49, #cd7d4b, #cc7c4a, #c06e40, #be6e3f )"],
        [cat2, "linear-gradient( to bottom, #db9b9b, #e8abab )"], [cat, "white"], [dog, "#f3f3f3"],
        [cat1, "linear-gradient( to right, #f1bbdc, #f3bad9, #ecb2d2, #e3a5c9, #e9adcf )"],
        [dog1, "linear-gradient( to bottom, #c47748, #cb7c49, #cd7d4b, #cc7c4a, #c77745, #cc7b4e, #c06e40, #be6e3f )"],
        [cat2, "linear-gradient( to bottom, #db9b9b, #e8abab )"]]
        
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
