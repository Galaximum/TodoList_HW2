import './App.css';
import TodoList from "../MyToDoList/TodoList";
import React from "react";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <TodoList/>
                </div>
            </div>
        );
    }
}

export default App;
