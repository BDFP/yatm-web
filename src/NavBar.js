import Inferno from 'inferno';
import Component from 'inferno-component';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="logo1.png" alt="Bulma logo" />
            </a>
            <a className="nav-item is-tab is-hidden-mobile">About</a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
            <a className="nav-item is-tab is-hidden-tablet">Features</a>
            <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              
              <span className="icon">
               <i className="fa fa-home" aria-hidden="true"></i>

              </span>
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
