import React from 'react';
import luzAcesa from './img/lampadaacesa.png';
import luzApagada from './img/lampadaapagada.jpg';

export default function Luz(props) {
    return (
        <>
            <img style={{ width: '200px' }} src={props.acender ? luzAcesa : luzApagada}></img>
            <button onClick={() => props.setAcender(!props.acender)}>{!props.acender ? 'Acender' : 'Apagar'}</button>
        </>
    );
}