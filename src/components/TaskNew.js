import React, { Component } from 'react';

class TaskNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <h5>TaskNew</h5>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
                    <input className="btn btn-sm btn-primary" type="submit"  />
                </form>
            </div>
        );
    }
}

export default TaskNew;
