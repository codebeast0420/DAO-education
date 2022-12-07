import React, { useEffect, useState } from "react";
import StartFirebase from "../firebaseConfig";
import { ref, onValue } from 'firebase/database';

const ManageDrops = () => {

	const [drops, setDrops] = useState({})

	const database = StartFirebase();
	const dropkey = Object.keys(drops);

	useEffect(() => {
		return onValue(ref(database, '/Drop'), querySnapShot => {
			let data = querySnapShot.val() || {};
			setDrops({ ...data });
			console.log(drops);
		});
	}, []);

	return (
		<div className="box">
			<div className="box-header with-border">
				<h3 className="box-title">Manage Drops</h3>
			</div>
			<div className="box-body">
				<div className="row">
					<div style={{ width: '100%', padding: '10px 3%' }}>
						<h1>Drops</h1>
						<div style={{ height: '215px', overflowY: 'scroll', overflowX: 'hidden' }}>
							<table class="table table-dark" style={{ textAlign: 'center' }}>
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
					</div>
				</div>
				<div className="packages">
					<h1>Packages</h1>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Amount</th>
								<th scope="col">Add</th>
								<th scope="col"></th>
								<th scope="col">Country</th>
								<th scope="col"></th>
								<th scope="col">Address</th>
								<th scope="col">City</th>
								<th scope="col">State</th>
								<th scope="col">Zip</th>
								<th scope="col">Status</th>
								<th scope="col">Expired date</th>
								<th scope="col">Notes</th>
								<th scope="col"></th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td scope="row">2400</td>
								<td>Davascha Jackson</td>
								<td>2</td>
								<td><button className="btn btn-primary"></button></td>
								<td></td>
								<td>USA</td>
								<td>Copy</td>
								<td>124 Elison St</td>
								<td>Bennettsvile</td>
								<td>SC</td>
								<td>123456</td>
								<td style={{ backgroudColor: 'green' }}>Checked</td>
								<td>11.14.2022</td>
								<td></td>
								<td>N/A</td>
								<td></td>
							</tr>
							<tr>
								<td scope="row">2400</td>
								<td>Davascha Jackson</td>
								<td>2</td>
								<td><button className="btn btn-primary"></button></td>
								<td></td>
								<td>USA</td>
								<td>Copy</td>
								<td>124 Elison St</td>
								<td>Bennettsvile</td>
								<td>SC</td>
								<td>123456</td>
								<td style={{ backgroudColor: 'green' }}>Checked</td>
								<td>11.14.2022</td>
								<td></td>
								<td>N/A</td>
								<td></td>
							</tr>
							<tr>
								<td scope="row">2400</td>
								<td>Davascha Jackson</td>
								<td>2</td>
								<td><button className="btn btn-primary"></button></td>
								<td></td>
								<td>USA</td>
								<td>Copy</td>
								<td>124 Elison St</td>
								<td>Bennettsvile</td>
								<td>SC</td>
								<td>123456</td>
								<td style={{ backgroudColor: 'green' }}>Checked</td>
								<td>11.14.2022</td>
								<td></td>
								<td>N/A</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ManageDrops;