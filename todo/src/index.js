import React, { Component } from 'react'
export default class TodoList extends Component {
  state = {
    todos: [
      { Id: '1', Title: 'Push your code to github', Status: 'Done' },
      { Id: '2', Title: 'Email to your manager', Status: 'Pending' },
    ],
  }
  render() {
    return (
      <div>
        <h1>TodoList </h1>
        <table>
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
                  <td>{x.Status}</td>
                  <td>
                    <button>Delete</button>
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
