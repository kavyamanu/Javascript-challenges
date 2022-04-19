import './App.css';
import {Logo} from "./components/Logo"
import { HeaderNavigation } from "./components/HeaderNavigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <Logo />
        </div>
        <HeaderNavigation/>
      </header>
      <main className="App-main">this is main</main>
      <footer className="App-footer">this is footer</footer>
    </div>
  );
}

export default App;
