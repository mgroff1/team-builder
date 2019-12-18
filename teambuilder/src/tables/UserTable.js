import React from 'react'
import './../App.css';
import AddUserForm from '../forms/AddUserForm.js';

const UserTable = props => (
  <table id="myInput">
    <thead>

      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>

    </thead>
    <tbody>
      {props.users.length > 0 ? (props.users.map((user,index) =>(

        <tr key={user.id}>
          <td> ID:{index+1} </td>
          <td id="myInput"> Name: {user.name} </td>
          <td> Last Name: {user.lastname}</td>
          <td> User Name: {user.username} </td>
          <td>
            <button
              onClick={() => {
                props.editRow(user)
              }}
              className="frmbtn submit"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteUser(user.id)}
              className="frmbtn cancel"
            >
              Delete
            </button>
          </td>
        </tr>

      ))
      ):(
        <tr>
          <td colSpan={3}>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
