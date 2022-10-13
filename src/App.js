import './App.css';
import BuisnessContext from './components/BuisnessContext';
import Header from './components/Header';
import Window from './components/Window';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <BuisnessContext/>
      </div>
    </div>
  );
}

export default App;
