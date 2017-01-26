import Inferno from 'inferno';
import Component from 'inferno-component';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  render() {
    var projects = ['Project 1', 'Project 2','Project 3','Project 4',
    'Project 5','Project 6','Project 7','Project 8', 'Project9'];
              
    var cardList = projects.map(function (proj) {
             return <Card name={proj} />
          });

              return (
                <div class="columns is-multiline is-desktop card_List">
                  {cardList}  
                </div>
               );
  }
}

export default CardList;
