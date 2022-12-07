import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ref, set, get, update, remove, child } from "firebase/database";
import StartFirebase from '../firebaseConfig';
import { format } from 'date-fns';

const AddDrop = () => {

	const [drop, setDrop] = useState({});
	const [pickup, setPickup] = useState('yes');
	const [envelopes, setEnvelopes] = useState('yes');
	const [verified, setVerified] = useState('yes');
	const [expired, setExpired] = useState(new Date());

	const changeEnv = (e) => {
		setEnvelopes(e.target.value);
	}

	const changeVerified = (e) => {
		setVerified(e.target.value);
	}

	const changePickup = (e) => {
		setPickup(e.target.value);
	}

	const handleChange = (event) => {
		event.persist();
		setDrop(drop => ({ ...drop, [event.target.name]: event.target.value }))
	}

	const addDrop = () => {
		const db = StartFirebase();

		set(ref(db, 'Drop/' + drop.firstname + drop.lastname + drop.zip),
			{
				firstname: drop.firstname,
				lastname: drop.lastname,
				address: drop.address,
				city: drop.city,
				state: drop.state,
				zip: drop.zip,
				pickup: pickup,
				envelopes: envelopes,
				verified: verified,
				expired: format(expired, 'dd/mm/yyyy').toString()
			})
			.then(() => {
				alert("Successed create Drop!")
			})
			.catch((err) => {
				alert("Something went wrong!")
			})
	}


	return (
		<div className="box">
			<div className="box-header with-border">
				<h3 className="box-title">Add Drop</h3>
			</div>
			<div className="box-body">
				<div className="row">
					<div className="col-md-5 create">
						<div className="name">
							<div className="input-item">
								<label>First Name</label>
								<input type='text' name='firstname' value={drop.firstname || ''} className='form-control' onChange={handleChange}></input>
							</div>
							<div className="input-item">
								<label>Last Name</label>
								<input type='text' name='lastname' value={drop.lastname || ''} className='form-control' onChange={handleChange}></input>
							</div>
						</div>
						<div className="input-item">
							<label>Address</label>
							<input type='text' name='address' value={drop.address || ''} className='form-control' onChange={handleChange}></input>
						</div>
						<div className="user-region">
							<div className="input-item">
								<label>City</label>
								<input type='text' name='city' value={drop.city || ''} className='form-control' onChange={handleChange}></input>
							</div>
							<div className="input-item">
								<label>State</label>
								<input type='text' name='state' value={drop.state || ''} className='form-control' onChange={handleChange}></input>
							</div>
							<div className="input-item">
								<label>Zip</label>
								<input type='text' name='zip' value={drop.zip || ''} className='form-control' onChange={handleChange}></input>
							</div>
						</div>
						<div className="user-check">
							<div className="input-item">
								<label>Pickup</label>
								<select className="form-control" name="pickup" value={pickup} onChange={changePickup}>
									<option>Yes</option>
									<option>No</option>
								</select>
							</div>
							<div className="input-item">
								<label>Envelopes/Letters</label>
								<select className="form-control" name="envelopes" value={envelopes} onChange={changeEnv}>
									<option>Yes</option>
									<option>No</option>
								</select>
							</div>
							<div className="input-item">
								<label>Verified</label>
								<select className="form-control" name="verified" value={verified} onChange={changeVerified}>
									<option>Yes</option>
									<option>No</option>
								</select>
							</div>
						</div>
						<div className="input-item">
							<label>Expired Drop Date</label>
							<DatePicker selected={expired} className='form-control' name="creation_date" onChange={(date: Date) => setExpired(date)} />
						</div>
						<div className="row-reverse">
							<button className="btn btn-primary createBtn" onClick={addDrop}>Create Drop</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddDrop;