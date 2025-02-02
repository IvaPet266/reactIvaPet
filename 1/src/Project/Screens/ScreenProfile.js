import React from 'react'

export default function ScreenProfile( props ) {

  return (
    <>
    { props.children }
    <div style={{ position: "absolute", background: "white" }}>ScreenProfile</div>
    </>
  )
}
