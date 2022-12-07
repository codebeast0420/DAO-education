import React, { useState, useEffect } from "react";
import { FundItem } from "./fundItem";
import StartFirebase from "../firebaseConfig";
import { ref, onValue, remove } from 'firebase/database';

const UserDetail = ({ msg, setMsg, user }) => {

	const [drops, setDrops] = useState({});
	const [deleteModal, setDeleteModal] = useState(false);

	const database = StartFirebase();
	const dropkey = Object.keys(drops);

	useEffect(() => {
		return onValue(ref(database, '/Drop'), querySnapShot => {
			let data = querySnapShot.val() || {};
			setDrops({ ...data });
		});
	}, []);

	const deletUser = () => {
		setDeleteModal(true);
		alert(deleteModal);
	}

	return (
		<div className="user-detail col-md-8">
			<div className="user-drops" style={{ height: '215px', overflowY: 'scroll' }}>
				<table className="table table-dark custom-table" style={{ textAlign: 'center' }}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Street</th>
							<th scope="col">City</th>
							<th scope="col">State</th>
							<th scope="col">Zip</th>
							<th scope="col">Check</th>
						</tr>
					</thead>
					<tbody>
						{dropkey.length > 0 ? (
							dropkey.map((key, index) => (
								<tr key={key} id={key}>
									<th scope="row">{index + 1}</th>
									<td>{drops[key].firstname}</td>
									<td>{drops[key].lastname}</td>
									<td>{drops[key].address}</td>
									<td>{drops[key].city}</td>
									<td>{drops[key].state}</td>
									<td>{drops[key].zip}</td>
									<td><input type='checkbox'></input></td>
								</tr>
							))
						) : (<h1>No Drops</h1>)}
					</tbody>
				</table>
			</div>
			{user !== '' && (
				<div className="row" style={{ marginLeft: '0px' }}>
					<div className="user-funds col-sm-6">
						<div className="small-title">Funds</div>
						<FundItem amount={50} sort={"pay"} />
						<FundItem amount={100} sort={"add"} />
						<FundItem amount={200} sort={"add"} />
					</div>
					<div className="col-sm-6 control-user">
						<div className="user-comment">Good User</div>
						<button className="btn btn-primary user-btn" onClick={() => setMsg(true)}>Message</button>
						<button className="btn btn-primary user-btn" onClick={deletUser}>Delete</button>
						<button className="btn btn-primary user-btn">Change Password</button>
						<button className="btn btn-primary user-btn">Lock/Unlock</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default UserDetail;