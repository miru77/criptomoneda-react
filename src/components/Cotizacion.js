import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.div`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;
const Precio = styled.div`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio  mas alto de día es: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio es mas bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualizacón: <span>{resultado.LASTUPDATE}</span></Info>

        </ResultadoDiv>
     );
}
 
export default Cotizacion;