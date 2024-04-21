import logo from './logo.svg';
import './App.css';
import Route from "../Routes/Route";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="50" width="50"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="PDF_tools">
            <div className="App">
              <Route />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
