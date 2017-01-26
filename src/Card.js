import Inferno from 'inferno';
import Component from 'inferno-component';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: props.name
    }
  }

  render() {
    return (  
     <div className="column is-one-quarter singlecard">
      <p><h3 id="cardname">{this.state.name}</h3></p>
     </div>
    );
  }
}

export default Card;
