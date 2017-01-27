import Inferno from 'inferno';
import Logo from './logo';
import './App.css';
import NavBar from './NavBar';

const App  = ({children}) => {
  return (
          <div>
            <NavBar />
            <div className="App">
            {/*<div className="App-header">
              <Logo />
              <h1>To-Do</h1>
            </div>*/}
            
            </div>
            <div className="container">
            {children}
            </div>
          </div>
  );
}

export default App; 
