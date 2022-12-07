import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';

const SideBar = () => {

	return (
		<aside className="main-sidebar">
			<section className="sidebar">
				<div className="user-panel">
					<div className="pull-left image">
						<img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
					</div>
					<div className="pull-left info">
						<p>Saul V</p>
						<Link to='/'><i className="fa fa-circle text-success"></i> Online</Link>
					</div>
				</div>
				<form action="#" method="get" className="sidebar-form">
					<div className="input-group">
						<input type="text" name="q" className="form-control" placeholder="Search..." />
						{/* <span className="input-group-btn">
							<button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
							</button>
						</span> */}
					</div>
				</form>
				<ul className="sidebar-menu" data-widget="tree">
					<li className="header">MAIN FUNCTION</li>
					<li>
						<Link to='/create-user'>
							<i className="fa fa-th"></i> <span>Create User</span>
							{/* <span className="pull-right-container">
								<small className="label pull-right bg-green">new</small>
							</span> */}
						</Link>
					</li>
					<li >
						<Link to='/manage-user'>
							<i className="fa fa-pie-chart"></i>
							<span>Manage User</span>
							{/* <span className="pull-right-container">
								<i className="fa fa-angle-left pull-right"></i>
							</span> */}
						</Link>
					</li>
					<li>
						<Link to='/add-drop'>
							<i className="fa fa-calendar"></i> <span>Add Drop</span>
							{/* <span className="pull-right-container">
								<small className="label pull-right bg-red">3</small>
								<small className="label pull-right bg-blue">17</small>
							</span> */}
						</Link>
					</li>
					<li>
						<Link to='manage-drops'>
							<i className="fa fa-envelope"></i> <span>Manage Drops</span>
							{/* <span className="pull-right-container">
								<small className="label pull-right bg-yellow">12</small>
								<small className="label pull-right bg-green">16</small>
								<small className="label pull-right bg-red">5</small>
							</span> */}
						</Link>
					</li>
				</ul>
			</section>
		</aside>
	)
}

export default SideBar;
