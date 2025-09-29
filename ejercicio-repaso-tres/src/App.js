import './App.css';
import React,{useState,useRef} from 'react';
function App() {
  var [texto,setTexto] =useState("");
  const mensajeRef = useRef();
  function contarCaracteres(e){
    const nuevoTexto = e.target.value;
  if (nuevoTexto.length === 20) {
    mensajeRef.current.innerHTML = "Has alcanzado el límite de 20 caracteres";
   
  } else {
    
     mensajeRef.current.innerHTML = "";
  }
  setTexto(nuevoTexto);
  }
  return (
    <div>
      <input type='text' value={texto}  onChange={contarCaracteres} className='centarElemetos' maxLength={20}></input>
      <div ref={mensajeRef}></div>
    </div>
  );
}

export default App;
