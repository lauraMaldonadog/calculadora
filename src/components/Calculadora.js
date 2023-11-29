import React, { useState } from 'react';
import Boton from './Boton';

const Calculadora = () => {
  const [entrada, setEntrada] = useState('');
  const [ultimaOperacion, setUltimaOperacion] = useState('');

  const manejarClicBoton = (valor) => {
    setEntrada((entradaPrev) => {
      setUltimaOperacion('');
      return entradaPrev + valor;
    });
  };

  const manejarCalcular = () => {
    try {
      let resultado;
      if (entrada.includes('MOD')) {
        const [operando1, operando2] = entrada.split('MOD').map((str) => parseFloat(str));
        resultado = (operando1 % operando2).toString();
      } else {
        resultado = eval(entrada).toString();
      }
      setEntrada(resultado);
      setUltimaOperacion(`${entrada} = ${resultado}`);
    } catch (error) {
      setEntrada('Error');
      setUltimaOperacion('');
    }
  };

  const manejarLimpiar = () => {
    setEntrada('');
  };

  const manejarPorcentaje = () => {
    setEntrada((entradaPrev) => (parseFloat(entradaPrev) / 100).toString());
    setUltimaOperacion('');
  };

  const manejarEliminar = () => {
    setEntrada((entradaPrev) => entradaPrev.slice(0, -1));
  };

  return (
    <div className="calculadora">
      <h1 className="calculadora-titulo">La supercalculadora</h1>
      <div className="pantalla">{ultimaOperacion || entrada}</div>
      <div className="pantalla">{entrada}</div>
      <Boton onClick={manejarClicBoton}>7</Boton>
      <Boton onClick={manejarClicBoton}>8</Boton>
      <Boton onClick={manejarClicBoton}>9</Boton>
      <Boton onClick={manejarClicBoton}>/</Boton>
      <Boton onClick={manejarClicBoton}>4</Boton>
      <Boton onClick={manejarClicBoton}>5</Boton>
      <Boton onClick={manejarClicBoton}>6</Boton>
      <Boton onClick={manejarClicBoton}>*</Boton>
      <Boton onClick={manejarClicBoton}>1</Boton>
      <Boton onClick={manejarClicBoton}>2</Boton>
      <Boton onClick={manejarClicBoton}>3</Boton>
      <Boton onClick={manejarClicBoton}>-</Boton>
      <Boton onClick={manejarClicBoton}>0</Boton>
      <Boton onClick={manejarClicBoton}>.</Boton>
      <Boton onClick={manejarCalcular}>=</Boton>
      <Boton onClick={manejarClicBoton}>+</Boton>
      <Boton onClick={manejarLimpiar}>C</Boton>
      <Boton onClick={manejarPorcentaje}>%</Boton>
      <Boton onClick={() => manejarClicBoton('MOD')}>MOD</Boton>
      <Boton onClick={manejarEliminar}>DEL</Boton>
    </div>
  );
};

export default Calculadora;