import React, { useState, useEffect } from "react";
import UserDetail from "../component/userDetail.js";
import { ChatBox } from "../ChatBox/index.js";
import StartFirebase from "../firebaseConfig/index.js";
import { ref, onValue } from "firebase/database";

const ManageUsers = () => {

	const [msg, setMsg] = useState(false);
	const [users, setUsers] = useState({});
	const [selUser, setSelUser] = useState('');

	const msgFlag = (status) => {
		setMsg(status);
	}

	const database = StartFirebase();
	const userkey = Object.keys(users);

	useEffect(() => {
		return onValue(ref(database, '/User'), querySnapShot => {
			let data = querySnapShot.val() || {};
			setUsers({ ...data });
			console.log(users);
		});
	}, []);

	const selectUser = (key) => {
		setSelUser(key);
	}

	return (
		<div className="box">
			<div className="box-header with-border">
				<h3 className="box-title">Manage Users</h3>
			</div>
			<div className="box-body">
				<div className="row message-history">
					<div className="col-md-4">
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Name</th>
									<th scope="col">Amount</th>
								</tr>
							</thead>
							<tbody>
								{userkey.length > 0 ? (
									userkey.map((key, index) => (
										<tr className="clickable" key={key} id={key} onClick={() => selectUser(key)}>
											<th scope="row">{index + 1}</th>
											<td>{users[key].username}</td>
											<td>50$</td>
										</tr>
									))
								) : (<h1>No Users</h1>)}
							</tbody>
						</table>
					</div>
					{msg == false ? <UserDetail msg={msg} setMsg={msgFlag} user={selUser} /> : <ChatBox setMsg={msgFlag} />}
				</div>
			</div>
		</div>
	)
}

export default ManageUsers;