import React from 'react'
import cat from "./imgs/cat.jpeg"

export default function Container() {
  return (
    <div style={{
        minWidth: "150px",
        maxWidth: "300px",
        margin: "2.5px",
        position: "relative",
        overflow: "hidden",

    }}>
        <div style={{
            padding: "7.5px",
            position: "absolute",
            bottom: "5px"
        }}>
            <h5 style={{position: "absolute", bottom: "0px"}}>Heading</h5>
            <span>description</span>
            <button></button>
        </div>
        <img style={{
            minWidth: "150px",
            maxWidth: "300px",
        }} src={cat}></img>
    </div>
  )
}