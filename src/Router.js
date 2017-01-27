import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import {createBrowserHistory} from 'history';
import App from './App';
import CardList from'./CardList';

const browserHistory = createBrowserHistory();

const Routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ CardList }/>
    </Route>
  </Router>
);

export default Routes;
