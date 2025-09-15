import './App.css';
import React,{useState} from 'react';
function App() {
   //Definir el estado para almacenar el resultado de la suma
 
   const [resultado,setResultado]=useState(null);
  




  const elemento = <h1 className="textCenter" >Hola Mundo  </h1>



  function botonPulsado(){
    const result=suma(8,5);
    setResultado(result)
  }


  return <div>
      <button onClick={botonPulsado} style={{marginTop:"10px",marginLeft:"10px"}}>Pulsame</button>
      <div>{elemento}</div>
      <div >{resultado}</div>
    
    
    </div >
}

function suma(a,b){
return a+b
}



export default App;
