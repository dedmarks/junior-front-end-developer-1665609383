import './App.css';
import BuisnessContext from './components/BuisnessContext';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <BuisnessContext/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
