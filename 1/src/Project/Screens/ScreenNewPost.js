import React from 'react'
import BaseScreen from './BaseScreen'

export default function ScreenNewPost( props ) {

  return (
    <BaseScreen>
    { props.children }
    <div style={{ background:"red" }}>ScreenNewPost</div>
    </BaseScreen>
  )
}
