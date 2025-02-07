import React from 'react'
import BaseScreen from './BaseScreen'

export default function ScreenProfile( props ) {

  return (
    <BaseScreen>
      { props.children }
      <div style={{ background: "white" }}>ScreenProfile</div>
    </BaseScreen>
  )
}
