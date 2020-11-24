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
          <Mui.Container><br />
          <Mui.ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Mui.Button href="/posts">Posts</Mui.Button>
                    <Mui.Button href="/comments">Comments</Mui.Button>
                    <Mui.Button href="/albums">Albums</Mui.Button>
                    <Mui.Button href="/photos">Photos</Mui.Button>
                    <Mui.Button href="/todos">Todos</Mui.Button>
                    <Mui.Button href="/users">Users</Mui.Button>
                </Mui.ButtonGroup>
        <h1 align="center">Data jsonplaceholder Components</h1>
          <table border="1">
            <tr>
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
                <td>{todo.email}</td>
                <td>{todo.body}</td>
              </tr>
              )}
          </table>
          </Mui.Container>
      </div>
    );
  }
}

export default App;