import React from 'react'

function vincularPropriedadeMembros(children,props){
    return React.Children.map(children,
                    child => React.cloneElement(child, {...props}))
}

export {vincularPropriedadeMembros}