import React from "react";
import PropTypes from 'prop-types';

export default function RequisicaoProps({ id, nome }) {
    return (
        <>
            <ul>
                <li>Id: {id} / Nome: {nome}</li>
            </ul>
        </>
    );
}

//definir o tipo de valores para cada parametro
//isRequired ordena a atribuição de valores
RequisicaoProps.propTypes = {
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired
}

//default props define valores padrões para quando nao sao passado parametros
RequisicaoProps.defaultProps = {
    id: 0,
    nome: '-'
}