import React, { createContext, useContext, useState } from 'react'
import theme from '../styles.json'


const color_theme = createContext( theme )


export default function BaseScreen( props ) {
  const { background } = useContext( color_theme )
  const [ color, setColor ] = useState( "default" )
  return (
    <div style={{ minHeight:"100vh", background: background[ color ]}}>
        { props.children }
        <button onClick={ () => setColor( "1" ) }></button>
    </div>
  )
}
