import './App.css';
import React, { useState, useRef } from 'react';
function App() {
  var [contador, setContador] = useState(0);

    const contadorRef = useRef();
  function mas() {
  
    if (contador >= 10) {
      contadorRef.current.innerHTML = "¡Máximo alcanzado!";
      
    } else {
      setContador(contador+1);
      contadorRef.current.innerHTML = "";
    }
    
  }

  function menos() {
    if (contador > 0) {
    setContador(contador-1);
    contadorRef.current.innerHTML = "";
    } else {
    contadorRef.current.innerHTML = "¡Mínimo alcanzado!";
    
    }
    
  }



  return (
    <div>
      <div>
        {contador}
      </div>
 
      <br></br>
      <button onClick={mas}>Mas</button>
      <br></br>
      <button onClick={menos}>Menos</button>
      <div ref={contadorRef}> </div>
    </div>
  );
}

export default App;
