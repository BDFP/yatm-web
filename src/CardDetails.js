import Inferno from 'inferno';
import Component from 'inferno-component';
import TaskList from './TaskList';

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
            <div className = "card title">
            <h2>Project ABC</h2>
            </div>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default CardDetails