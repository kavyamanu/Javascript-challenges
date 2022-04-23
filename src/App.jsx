import './App.css';
import {Logo} from "./components/Logo"
import { HeaderNavigation } from "./components/HeaderNavigation";
import { FooterNavigation } from "./components/FooterNavigation";
import { Challenges } from "./components/Challenges";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <Logo />
        </div>
        <HeaderNavigation />
      </header>
      <main className="App-main">
        <Challenges />
      </main>
      <footer className="App-footer"><FooterNavigation/></footer>
    </div>
  );
}

export default App;
