import React from "react";
import TodoElement from "../Task/TodoElement";
import AddTodoElement from "../TaskAdd/AddTodoElement";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    id: 1,
                    name: 'Сдать домашку',
                    description: 'Надо успеть сделать дз по python до 20.10.2021',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Купить молоко',
                    description: 'Сходить в магазин, и купить 5% молоко',
                    completed: true
                },
                {
                    id: 3,
                    name: 'Празник',
                    description: '23.10.2021 не забыть купить подарок Леше',
                    completed: false
                },
                {
                    id: 4,
                    name: 'Убраться в комнате',
                    description: 'Надо помыть окна, постирать одежду и протереть пыль',
                    completed: true
                },
                {
                    id: 5,
                    name: 'Сходить в боулинг',
                    description: 'Когда нибудь сходить в боулинг с друзьями',
                    completed: true
                },
                {
                    id: 6,
                    name: 'Слетать в Нижний новгород',
                    description: '15.12.2021 встреча одногруппников в нижнем новгороде. Надо купить билеты',
                    completed: false
                }
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    addItem(title, description) {

        var newItem = {
            id: Math.random(),
            name: title,
            description: description,
            completed: false
        };

        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(newItem)
            };
        });
    }

    updateTask = (oldProp) => {
        const newStatus = !oldProp.completed
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.map(x => {
                    if (x.id === oldProp.id) {
                        x.completed = newStatus
                    }
                    return x
                })
            };
        });
        console.log(this.state.tasks);
    };


    render() {
        return (
            <div id="todoList">
                <AddTodoElement addItem={this.addItem}/>
                <ul>
                    {
                        this.state.tasks.map((task, idx) => {
                            return (
                                <TodoElement key={task.id} index={idx} task={task} updateTask={this.updateTask}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default TodoList;
