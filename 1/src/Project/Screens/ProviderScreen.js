import React, { createContext, useContext, useState } from 'react';

const screenContext = createContext( "main" );
export const useScreen = () => useContext( screenContext );

export default function ProviderScreen( props ) {
    const [ screen, setScreen ] = useState( 'main' );

    return (
        <screenContext.Provider value={{screen, setScreen}}>
            { props.children }
        </screenContext.Provider>
    )
};
