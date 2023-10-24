import logo from './logo.svg';
import { Instructions } from './components/instructions';
import { Options } from './components/currencyOptions'
import './App.css';


const divisas = ['MXN','USD','EUR','BTC','ETH','DODGE']

function App() {
  return (
    <>
      {/* Header */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CALCULADORA DE DIVISAS</h1>
        </header>
      </div>
      
      {/* Body */}
      <div className='App-content'>
        <div>
          <Instructions divisas={divisas} />
        </div>

        <div>
          <Options divisas={divisas}/>
        </div>
      </div>
    </>

  );
}

export default App;
