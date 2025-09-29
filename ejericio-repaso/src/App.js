import './App.css';
import React, { useRef, useState,useEffect } from 'react';
function App() {
  const [valorCambio, setValorCambio]=useState(null);
  const eurosRef = useRef();
  const resultadoref = useRef();

  useEffect(()=>{
   
      const llamaApicambio=async()=>{
        try {
          const repuesta=await fetch("https://v6.exchangerate-api.com/v6/62ae49e85ebd25ef04427964/latest/EUR");
          const datos=await repuesta.json();
          console.log(datos);

          setValorCambio(datos.conversion_rates.USD);
        } catch (error) {
          console.error("Eror al acceder a la api ",error);
        }
      }
  llamaApicambio();
  },[]);


  function conversor() {
    const eurosValor = parseFloat(eurosRef.current.value);
    const dolares = eurosValor * valorCambio;
    resultadoref.current.innerHTML = dolares.toFixed(2)+ "$";
  }

  return (
    <div>

      <h1>Conversor Euro-Dolar</h1>

      <input type='text' ref={eurosRef} className='centarElemetos'></input>
      <button onClick={conversor} className='centarElemetos'>Convertir</button>
      <div ref={resultadoref} className='centarElemetos resultado'>  </div>
    </div>
  );
}

export default App;
