import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Bienvenido</h1>
    </>
  );
}

const Numero = () => {
  const { numero } = useParams();
  return (
    <h1>{isNaN(numero) ? 'No es un número' : numero}</h1>
  );
}

const Palabra = () => {
  const { palabra } = useParams();
  return (
    <h1>{palabra}</h1>
  );
}

const EstiloPalabra = () => {
  const { palabra, colorTexto, colorFondo } = useParams();
  const estilo = {
    color: colorTexto,
    backgroundColor: colorFondo
  };
  return (
    <h1 style={estilo}>{palabra}</h1>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:palabra/:colorTexto/:colorFondo" element={<EstiloPalabra />} />
        <Route path="/:numero" element={<Numero />} />
        <Route path="/palabra/:palabra" element={<Palabra />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

