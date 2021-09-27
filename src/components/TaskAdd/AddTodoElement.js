import React from "react";
import './AddTodoElement.css'
class AddTodoElement extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this.inputTitle.value !== "" && this.inputDescription.value !== "") {
            this.props.addItem(this.inputTitle.value, this.inputDescription.value)
        }
        this.inputTitle.value = "";
        this.inputDescription.value = "";
        e.preventDefault()
    }


    render() {
        return (
            <form id="todoList-form" onSubmit={this.addItem}>
                <input ref={(a) => this.inputTitle = a}
                       placeholder="Титул"/>

                <input name="desc" ref={(b) => this.inputDescription = b}
                       placeholder="Описание"/>

                <button type="submit">add</button>
            </form>
        );
    }
}

export default AddTodoElement;