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
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
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
        <h3 align="center">Data jsonplaceholder Comments</h3>
          <table border="1">
            <tr class="responsive-table card-panel teal lighten-1">
              <td>POST ID</td>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>BODY</td>
            </tr>
            {data.map(todo =>
              <tr hey={todo.id}>
                <td>{todo.postId}</td>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.email}</td>
                <td>{todo.body}</td>
              </tr>
              )}
          </table>
          
      </div>
    );
  }
}

export default App;