import Inferno from 'inferno';
import Component from 'inferno-component';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../logo2.png" alt="TO-Do logo"/>
      </a>
      <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
      <a class="nav-item is-tab is-hidden-mobile">Schedule</a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
      <a class="nav-item is-tab is-hidden-tablet">Features</a>
      <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
      <a class="nav-item is-tab is-hidden-tablet">About</a>
      <a class="nav-item is-tab">
        <figure class="image is-16x16">
          <img src="http://bulma.io/images/jgthms.png" alt="Profile Logo"/>
        </figure>
        Profile
      </a>
      <a class="nav-item is-tab">Log out</a>
    </div>
  </div>
</nav>
    );
  }
}

export default NavBar;