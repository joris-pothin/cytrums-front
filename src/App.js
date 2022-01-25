import './App.css';
import MainMenu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu pageWrapId={ "page-wrap" } />
        <main id="page-wrap">
          ...
        </main>
      </header>
    </div>
  );
}

export default App;
