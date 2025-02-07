import React from 'react'
import BaseScreen from './BaseScreen'

export default function ScreenMain( props ) {

  return (
    <BaseScreen>
      { props.children }
      <div style={{ background:"wheat" }}>ScreenMain</div>
    </BaseScreen>
  )
}
