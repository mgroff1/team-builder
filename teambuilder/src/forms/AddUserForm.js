import React,{useState} from 'react';

const AddUserForm = props => {
  const initialFormState = {id:null, name: ' ', username: ' '};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (

    <form
     onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username){return}
        props.addUser(user)
        setUser(initialFormState)
      }}>

      <div className="form-div">
        <label> Name </label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      </div>
      <div className="form-div">
        <label> Last Name </label>
        <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange}/>
      </div>
      <div className="form-div">
        <label> User Name</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
      </div>
<button className="button submit">Submit</button>
    </form>

  )
}

export default AddUserForm;
