import Inferno, { render } from 'inferno';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<NavBar />, div);
});
