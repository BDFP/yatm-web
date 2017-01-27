import Inferno from 'inferno';
import Component from 'inferno-component';


class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = props.tasks;
    }
    

  render() {
      var tasks = this.state.map(function(task){
          return ( 
                <li>
                    {task.name}
                </li>
               );  
      })
    return (
     <ul>
     {tasks}
     </ul>
    );
  }
}

export default TaskList;
