import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            editableIdx: null,
            editable: null,
            editedTitle: null,
            editedDescription: null
        }
        this.showEdit = this.showEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showEdit(task, idx){
        if(task === this.state.editable){
            this.setState({editable: null, editableIdx: null})
        } else {
            this.setState({editable: task, editableIdx: idx ,editedTitle: task.title, editedDescription: task.description})
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateTask(this.state.editableIdx, this.state.editedTitle, this.state.editedDescription);
        this.setState({editable: null, editableIdx: null});
    }

    render() {
        const tasks = this.props.tasks.map((task, idx) => {
            return (
                <li key={idx}> 
                    <span>{task.title} - {task.description}</span>
                    <button
                        className="btn btn-sm btn-warning"
                        onClick={()=>this.showEdit(task, idx)}
                    >Edit</button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={()=>{this.props.removeTask(idx)}}
                    >Remove</button> 
                </li>
            );
        })
        return (
            <div>
                {this.state.editable ? 
                    <div className="form-group">
                        Edit: {this.state.editable.title}
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="editedTitle"
                                value={this.state.editedTitle}
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                name="editedDescription"
                                value={this.state.editedDescription}
                                onChange={this.handleChange} 
                            />
                            <input
                                className="btn btn-sm btn-primary" 
                                type="submit"
                            />
                        </form>
                    </div>
                    : null
                }
                <h5>TaskList</h5>
                <div>
                    <ul>{tasks}</ul>
                </div>
            </div>
        );
    }

}

export default TaskList;


// function TaskList (props){
//     const tasks = props.tasks.map((task, idx) => {
//         return (
//             <li key={idx}> 
//                 {task.title} - {task.description} 
//                 <button onClick={()=>{props.removeTask(idx)}}>Remove</button> 
//             </li>
//         );
//     })
//     return (
//         <div>
//             <h5>TaskList</h5>
//             <ul>{tasks}</ul>
//         </div>
//     );
// }

// export default TaskList;
