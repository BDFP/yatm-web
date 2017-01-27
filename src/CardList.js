import Inferno from 'inferno';
import Card from './Card';
import './CardList.css';

const CardList = () => {
    var projects = [
      {
        name: 'Project 1',
        completed: 4,
        total: 10
      },
      { 
        name: 'Project 2',
        completed:  4,
        total: 10
      },
      {
        name: 'Project 3',
        completed: 4,
        total: 10
      },
      { 
        name: 'Project 4',
        completed:  4,
        total: 10
      },
      {
        name: 'Project 5',
        completed: 4,
        total: 10
      },
      { 
        name: 'Project 6',
        completed:  4,
        total: 10
      }
    ];
              
    var cardList = projects.map(function (proj) {
             return <Card details={proj} />
          });

    return (
      <div class="columns is-multiline is-desktop card_List">
        {cardList}  
      </div>
      );
}

export default CardList;
