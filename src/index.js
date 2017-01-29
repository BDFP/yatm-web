import Inferno from 'inferno';
import '../node_modules/bulma/css/bulma.css'
import './components/index.css';
import Routes from './Router';

Inferno.render(
  Routes,
  document.getElementById('app')
);
