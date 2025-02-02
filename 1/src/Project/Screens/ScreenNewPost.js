import React from 'react'

export default function ScreenNewPost( props ) {

  return (
    <>
    { props.children }
    <div style={{ position: "absolute", background:"red" }}>ScreenNewPost</div>
    </>
  )
}
