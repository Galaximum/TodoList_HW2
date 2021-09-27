import React from "react";
import './TodoElement.css'

class TodoElement extends React.Component {
    constructor(props) {
        super(props);
        this.changeTextBox = this.changeTextBox.bind(this);
    }

    changeTextBox() {
        this.props.updateTask(this.props.task);
    }

    render() {
        const task = this.props.task;

        return (
            <li className={task.completed ? "done" : null}>
                <input type='checkbox' checked={task.completed}
                       onChange={this.changeTextBox}
                />
                <text name="name">{task.name}</text>
                <text id="desc">{task.description}</text>
            </li>
        );
    }

}


export default TodoElement;
