import React from 'react';
import ReactDOM from 'react-dom'
import Familia from './familia.jsx'
import Membro from './membro.jsx'

ReactDOM.render(
    <Familia>
        <Membro nome="Jose" sobrenome="Silva"/>
        <Membro nome="Vitor" sobrenome="Silva"/>
        <Membro nome="Paulo" sobrenome="Silva"/>
        <Membro nome="Pedro" sobrenome="Silva"/>
    </Familia>
,
document.getElementById('app'));