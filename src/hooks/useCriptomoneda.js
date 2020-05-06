import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family : 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    `;





const useCriptomoneda = (label, stateInicial, opciones) => {    
 //  console.log(opciones);
  //State de nuetro hook
  const [state, actualizaState] = useState(stateInicial);

// eslint-disable-next-line no-unused-expressions
const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                    onChange={ e=> actualizaState(e.target.value)}
                    value={state}
            >
                    
                    <option value="">- Selecione -</option>  
                    { opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))}
               

            </Select>

        </Fragment>
    );
   
    //REtorna state, interzaf y fn que modifica el state
    return[state, SelectCripto, actualizaState];
}
export default useCriptomoneda;