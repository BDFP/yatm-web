import Inferno from 'inferno';
import Component from 'inferno-component';
import './TaskList.css';


class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = props.tasks;
    }
    

  render() {
      var tasks = this.state.map(function(task){
          return ( 
                <li>
                   <input type="checkbox" name="status"/> {task.name} 
                </li>
               );  
      })
    return (
      <div class="taskslist">
     <ul>
     {tasks}
     </ul>
     </div>
    );
  }
}

export default TaskList;
