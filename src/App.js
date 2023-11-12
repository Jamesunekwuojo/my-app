// import logo from './logo.svg';
import './App.css';

function App() {
  let title = "Welcome To EOUJI Rentals Platform "; 
  const link ="http://vercel.com portfoliofjames";

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>Please fill out the form below, </p>
        <a href={link}>My portfolio</a>

      </div>
      
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
