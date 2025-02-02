import React from 'react'

export default function ScreenMain( props ) {

  return (
    <>
    { props.children }
    <div style={{ position: "absolute", background:"wheat" }}>ScreenMain</div>
    </>
  )
}
