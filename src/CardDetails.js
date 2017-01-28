import Inferno from 'inferno';
import Component from 'inferno-component';
import TaskList from './TaskList';
import './CardDetails.css';
const CardDetails = () => {
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
        <div className = "carddetails">
            <div className = "title">
            <h2>Project ABC</h2>
            </div>
            <div className = "taskslist">
            <TaskList tasks={tasks} />
            </div>
            <div className = "inputform">
            <form>
            <input type="text" name="fname" placeholder="Your To-Do"/>
            <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
}

export default CardDetails