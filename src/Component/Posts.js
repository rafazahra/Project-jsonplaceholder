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
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
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
      <a class="brand-logo">PLACEHOLDER</a>
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
        <h3 align="center">Data jsonplaceholder Posts</h3>
        <table border="1">
        <thead>
        <tr class="responsive-table card-panel teal lighten-1">
            <td>USER ID</td>
            <td>ID</td>
            <td>Title</td>
            <td>BODY</td>
        </tr>
        </thead>
        <tbody>
        {data.map(todo =>
              <tr hey={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
              </tr>
              )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;