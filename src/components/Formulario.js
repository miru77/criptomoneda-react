import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';




const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    //sarate de listado de cripto
    const [listacripto, guardarCriptomonedas] = useState([]);
    //Error
    const [error, guardarError] = useState(false);

    const MONEDAS = [
            {codigo:  'USD', nombre: 'Dolar de Estados Unidos'},
            {codigo:  'MXN', nombre: 'Peso Mexicano'},
            {codigo:  'EUR', nombre: 'Euro'},
            {codigo:  'GBP', nombre: 'Libra Esterlina'}
    ]
    const[moneda, SeleccionarMonedas] = useMoneda('Elige tu Moneda','',MONEDAS);
        //utilizar usecriptomneda
    const[criptmoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','',listacripto);

        //Ejecutar llamado a la API
    useEffect(() => {
        const consularAPI = async () => {

            const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consularAPI();
     
    }, [])
    
    //Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        //validar
        if(moneda === '' || criptmoneda === "") {
            guardarError(true);
            return;
        }
        guardarError(false);
        //pasar los datos a componente principal
        guardarMoneda(moneda);
        guardarCriptomoneda(criptmoneda);
    }

    return (  
        <form onSubmit={cotizarMoneda}>
            {error ? <Error mensaje="Todos los campos son obligatorios"/>: null}
            <SeleccionarMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;