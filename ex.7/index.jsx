import React from 'react';
import ReactDOM from 'react-dom'
import Familia from './familia.jsx'
import Membro from './membro.jsx'

ReactDOM.render(
    <Familia sobrenome="Silva">
        <Membro nome="Jose" />
        <Membro nome="Vitor" />
        <Membro nome="Paulo" />
        <Membro nome="Pedro" />
    </Familia>
,
document.getElementById('app'));