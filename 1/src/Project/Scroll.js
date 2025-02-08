import React from 'react'
import Container from './Container'

export default function Scroll() {
    const CARDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }}>
            { CARDS.map( ( value, index ) => <Container key={index}/>)}
        </div>
    )
}
