import './App.css';
import VendingForm from './VendingForm'
import Change from './Change';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Vending Machine</h1>
      <VendingForm/>
      <Change/>
      </header>
    </div>
  );
}

export default App;
