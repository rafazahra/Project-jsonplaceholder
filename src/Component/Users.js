import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
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
                <h3 align="center">Data jsonplaceholder Users</h3>
                    <table border="1">
                    <thead>
                        <tr class="responsive-table card-panel teal lighten-1">
                            <td>id</td>
                            <td>name</td> 
                            <td>username</td>
                            <td>email</td> 
                            <td colSpan="6" align="center">address</td>
                            <td>phone</td>
                            <td>website</td>
                            <td colSpan="3" align='center'>company</td> 
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <thead>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td> 
                            <td>{todo.username}</td>
                            <td>{todo.email}</td> 
                            <td>{todo.address.street}</td>     
                            <td>{todo.address.suite}</td>
                            <td>{todo.address.city}</td> 
                            <td>{todo.address.zipcode}</td>
                            <td>{todo.address.geo.lat}</td> 
                            <td>{todo.address.geo.lng}</td>
                            <td>{todo.phone}</td>
                            <td>{todo.website}</td> 
                            <td>{todo.company.name}</td>
                            <td>{todo.company.catchPhrase}</td>
                            <td>{todo.company.bs}</td> 
                        </tr>
                    </thead>
                    )}
                </table>

            </div>
        )
    }
}
    
export default Users;