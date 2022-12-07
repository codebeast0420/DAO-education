import React, { useState } from "react";
import '../../styles.css';
import { ref, set, get, update, remove, child } from "firebase/database";
import StartFirebase from '../firebaseConfig';
import bcrypt from 'bcryptjs';

const CreateUser = () => {

	const [userData, setUserData] = useState({});
	const [type, setType] = useState('Admin');
	const changeType = (e) => {
		e.persist();
		setType(e.target.value);
	}

	const handleChange = (event) => {
		event.persist();
		setUserData(userData => ({ ...userData, [event.target.name]: event.target.value }))
	}

	const CreateData = () => {
		if (userData.repeat_pwd !== userData.password) {
			alert("Please confirm your password")
		}
		else {
			const db = StartFirebase();

			set(ref(db, 'User/' + userData.username),
				{
					username: userData.username,
					password: bcrypt.hashSync(userData.password, '$2a$10$CwTycUXWue0Thq9StjUM0u'),
					type: type
				})
				.then(() => {
					alert("Successed create user!");
					setUserData({});
				})
				.catch((err) => {
					alert("Something went wrong!")
				})
		}
	}

	return (
		<div className="box">
			<div className="box-header with-border">
				<h3 className="box-title">Create User</h3>
			</div>
			<div className="box-body">
				<div className="row">
					<div className="col-md-5 create">
						<div className="input-item">
							<label>User Name</label>
							<input type='text' name='username' value={userData.username || ''} className='form-control' onChange={handleChange}></input>
						</div>
						<div className="input-item">
							<label>Password</label>
							<input type='password' name='password' value={userData.password || ''} className='form-control' onChange={handleChange}></input>
						</div>
						<div className="input-item">
							<label>Confirm Password</label>
							<input type='password' name='repeat_pwd' value={userData.repeat_pwd || ''} className='form-control' onChange={handleChange}></input>
						</div>
						<div className="input-item">
							<label>User type</label>
							<select className="form-control" name="user-type" value={type} onChange={changeType} >
								<option>Admin</option>
								<option>Simple</option>
								<option>Call Office</option>
							</select>
						</div>
						<div className="row-reverse">
							<button className="btn btn-primary createBtn" onClick={CreateData}>Create User</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateUser;