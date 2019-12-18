import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import UserTable from './tables/UserTable.js';
import AddUserForm from './forms/AddUserForm.js';
import EditUserForm from './forms/EditUserForm';
import {Text} from './text/TextFile.js';


const App = ()=> {
  const userData = [
    {id: 1, name: 'Mick',lastname:'Groff', username: 'mgroff'},
  ]
const initialFormState = { id: null, name: '', username: '' }
const [users,setUsers] = useState(userData)
const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


const addUser = user =>{
  user.id = user.length +1
  setUsers([...users,user])
  const deleteUser = id => {
  setUsers(users.filter(user => user.id !== id))
}
}

	const updateUser = (id, updatedUser) => {
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
		setEditing(false)
	}

const deleteUser = id => {
  setEditing(false)
  setUsers(users.filter(user => user.id !== id))
}

const editRow = user => {
  setEditing(true)
  setCurrentUser({ id: user.id, name: user.name, lastname: user.lastname, username: user.username })
}

return (
  <div className="container">
    <h1>TeamBuilder</h1>
    <div className="c2">
      <div className="flexC">
        <h2>Edit User</h2>
        <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
        />
        <h2>Add user</h2>

        <AddUserForm addUser={addUser}/>

        <div className="flexC">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
    <Text>{users.name}</Text>
  </div>
    )
}
export default App;
