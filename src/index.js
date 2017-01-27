import Inferno from 'inferno';
import '../node_modules/bulma/css/bulma.css'
import './index.css';
import Routes from './Router';

Inferno.render(
  Routes,
  document.getElementById('app')
);
