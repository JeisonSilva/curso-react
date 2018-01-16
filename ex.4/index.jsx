import React from 'react';
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component.jsx'

ReactDOM.render(
    <div>        
        <Primeiro value="Jose"/>
        <Segundo value="Pedro"/>
    </div>
,
document.getElementById('app'));