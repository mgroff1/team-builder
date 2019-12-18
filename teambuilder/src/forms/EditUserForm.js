import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	useEffect(
		() => {
			setUser(props.currentUser)
		},
		[ props ]
	)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className="editAdd"
			onSubmit={event => {
				event.preventDefault()
				props.updateUser(user.id, user)
			}}
		>
      <div className="form-div">
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </div>
        <div className="form-div">
      <label>Email</label>
      <input type="text" name="lastname" value={user.email} onChange={handleInputChange} /></div>
        <div className="form-div">
			<label>Role</label>
			<input type="text" name="username" value={user.role} onChange={handleInputChange} /></div>
			<button className = "button submit">Update user</button>
			<button onClick={() => props.setEditing(false)} className="button cancel">
				Cancel
			</button>
		</form>
	)
}

export default EditUserForm
