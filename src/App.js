import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';

function App() {
  const LISTA = [" ","X"," "," "," "," "," "," ","O"]

  return (
    <div className="App">
      <header className="App-header">TicTacToe</header>
      <aricle>
        <Jatekter />
      </aricle>
      <footer>Simon Gergő</footer>
    </div>
  );
}

export default App;