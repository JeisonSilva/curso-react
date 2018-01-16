import React from 'react'
import {vincularPropriedadeMembros} from './utils/membroMap.js'
export default props=> (
    <div>
        {vincularPropriedadeMembros(props.children,props)}
    </div>
)
