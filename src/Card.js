import Inferno from 'inferno';
import Component from 'inferno-component';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = props.details;
    }

  render() {
    return (  
     <div className="column is-one-quarter singlecard">
     <div className="card"><h3 id="cardname">{this.state.name}</h3>
         <progress class="progress is-primary" 
            value={this.state.completed} 
            max={this.state.total}>
              {this.state.completed/this.state.total}%
              <p>{(this.state.completed/this.state.total)*100}%</p>
         </progress>
    <p>{(this.state.completed/this.state.total)*100}%</p>
      </div>
     </div>
    );
  }
}

export default Card;
