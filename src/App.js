import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import NavBar from './NavBar';
import CardList from './CardList';

class App extends Component {
  render() {
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
        <CardList />
        </div>
      </div>
    );
  }
}

export default App;
