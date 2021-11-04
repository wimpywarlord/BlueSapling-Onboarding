import React, { Component } from 'react'
import AddTodo from './AddTodo'

export default class TodoList extends Component {
  state = {
    todos: [
      { Id: '1', Title: 'Push your code to github', Status: 'Done' },
      { Id: '2', Title: 'Email to your manager', Status: 'Pending' },
    ],
  }
  deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter((x) => x.Id !== todo.Id)
    this.setState({
      todos: filteredItems,
    })
  }
  editToDo = (x) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.Id === x.Id) {
          return {
            ...todo,
            Status: todo.Status === 'Done' ? 'Pending' : 'Done',
          }
        } else {
          return todo
        }
      }),
    }))
  }
  addToDo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    })
  }

  render() {
    return (
      <div>
        <AddTodo onAdd={this.addToDo}></AddTodo>
        <h1>TodoList </h1>
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((x) => {
              return (
                <tr key={x.Id}>
                  <td>{x.Id}</td>
                  <td>{x.Title}</td>
                  <td style={{ color: x.Status === 'Done' ? 'green' : 'red' }}>
                    {x.Status}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.deleteToDo(x)}
                    >
                      Delete
                    </button>
                    <span> </span>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.editToDo(x)
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
