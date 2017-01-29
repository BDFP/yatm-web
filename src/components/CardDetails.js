import Inferno from 'inferno';
import TaskList from './TaskList';
import Card from './Card'; 
import './CardDetails.css';

const CardDetails = ({params}) => {
    console.log(params);
    var tasks = [   
        {
            name : 'task1'
        },
        {
            name:  'task2'
        },
        {
            name: 'task3'
        },
        {
            name: 'task4'
        }
        ];
        
        
    return(
        <div className="carddetails columns">
            <Card className="title column is-quarter" details={{ name: 'Project2', completed: 4,
            total: 10, id: 2}}/>
            <div className="column is-three-quarter">
                <div>
                <TaskList tasks={tasks} />
                </div>
                <div className="inputform">
                <form>
                <input type="text" name="taskdescription" placeholder="Your To-Do"/>
                <input type="submit" value="Submit"/>
                </form>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;