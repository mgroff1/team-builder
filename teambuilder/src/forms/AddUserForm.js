import React,{useState} from 'react';

const AddUserForm = props => {
  const initialFormState = {id:null, name: ' ', email: ' ',role: ' '};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (

    <form className="editAdd"
     onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.email){return}
        props.addUser(user)
        setUser(initialFormState)
      }}>

      <div className="form-div">
        <label> Name </label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      </div>
      <div className="form-div">
        <label> Email </label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange}/>
      </div>
      <div className="form-div">
        <label> Role </label>
        <input type="text" name="role" value={user.role} onChange={handleInputChange}/>
      </div>
<button className="button submit">Submit</button>
    </form>

  )
}

export default AddUserForm;
