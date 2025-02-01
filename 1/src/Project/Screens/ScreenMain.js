import React from 'react'

export default function ScreenMain( props ) {
  return (
    <>
    { props.children }
    <div style={{ background:"wheat" }}>ScreenMain</div>
    </>
  )
}
