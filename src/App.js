import Inferno from 'inferno';
import Logo from './logo';
import './App.css';
import NavBar from './NavBar';

const App  = ({children}) => {
  return (
          <div>
            <NavBar />
            <div className="App">
            <div className="App-header">
              <Logo />
              <h1>To-Do</h1>
            </div>
            {/*<p className="App-intro">
              To ge, edit <code>src/App.js</code> and save to reload.
            </p>*/}
            </div>
            <div className="container">
            {children}
            </div>
          </div>
  );
}

export default App; 
