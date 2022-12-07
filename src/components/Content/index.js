import React from 'react';
import AddDrop from './AddDrop';
import CreateUser from './CreateUser';
import ManageDrops from './ManageDrops';
import ManageUsers from './ManageUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Content = () => {
	return (
		<div className="content-wrapper">
			<section className="content-header">
				<div className="row">
					<div className="col-md-12">
						<Routes>
							<Route exact path="/create-user" element={<CreateUser />} />
							<Route path="/manage-user" element={<ManageUsers />} />
							<Route path="/add-drop" element={<AddDrop />} />
							<Route path="/manage-drops" element={<ManageDrops />} />
						</Routes>
					</div>
				</div>
			</section>
		</div>
	)
}
