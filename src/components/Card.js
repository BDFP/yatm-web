import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = props.details;
    }

  render() {
    return (  
      <Link className="column is-one-quarter singlecard card" 
            to={"/project/" + this.state.id}>
        <div className="cardtext">
        <h3 id="cardname">{this.state.name}</h3>
            <progress class="progress is-primary" 
              value={this.state.completed} 
              max={this.state.total}>
                {this.state.completed/this.state.total}%
                <p>{(this.state.completed/this.state.total)*100}%</p>
            </progress>
            <p>{(this.state.completed/this.state.total)*100}%</p>
        
        </div>
     </Link>
    );
  }
}

export default Card;