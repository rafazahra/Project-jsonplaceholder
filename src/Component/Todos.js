import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data : [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => this.setState({ data: data }));
  }

  render(){
    const { data } = this.state;

    return(
      <div>
          <nav>
          
    <div class="nav-wrapper cyan darken-4">
      <a href="#" class="brand-logo">PLACEHOLDER</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/posts">Posts</a></li>
        <li><a href="/comments">Comments</a></li>
        <li><a href="/albums">Albums</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/todos">Todos</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
      </div>
   
  </nav>
        <h3 align="center">Data jsonplaceholder Todos</h3>
          <table border="1">
            <tr class="responsive-table card-panel teal lighten-1">
              <td>USER ID</td>
              <td>ID</td>
              <td>TITLE</td>
              <td>COMPLETED</td>
            </tr>
            {data.map(todo =>
              <tr hey={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>
              </tr>
              )}
          </table>
          
      </div>
    );
  }
}

export default App;