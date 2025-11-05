import logo from './logo.svg';
import './App.css';

function App() {

  const miArray =()=>{
    const numerosArray=[
      {id:1,numero:12},
      {id:2,numero:46}, 
      {id:3,numero:90}, 
      {id:4,numero:32}, 
      {id:5,numero:78}
    ]


      return (

        <p>
          {numerosArray.map((item)=>{
            return <span key={item.id}>{item.id},&nbsp;{item.numero},</span>
          })}
        </p>
      )
  }



























  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {miArray()}
        
      </header>
    </div>
  );
}

export default App;
