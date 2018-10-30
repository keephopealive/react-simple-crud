import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskNew from './TaskNew';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {title:'code', description: 'code code code'},
                {title:'drink coffee', description: 'drink some coffee'}
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    addTask(newTask){
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    removeTask(idx){
        this.state.tasks.splice(idx, 1);
        this.setState({
            tasks: this.state.tasks    
        })
    }

    updateTask(idx, title, description){
        this.state.tasks[idx].title = title;
        this.state.tasks[idx].description = description;
        this.setState({
            tasks: this.state.tasks
        })
    }

    render() {
        return (
            <div className="container">
                <h5>Task</h5>
                <TaskNew 
                    addTask={this.addTask} 
                />
                <TaskList 
                    tasks={this.state.tasks} 
                    removeTask={this.removeTask}
                    updateTask={this.updateTask}
                />
            </div>
        );
    }
}

export default Task;
