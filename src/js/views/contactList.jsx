import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contactCard.jsx";

export const ContactList = () => {


	return (
		<div className="container">
			<Link className="d-flex align-items-end text-decoration-none" to="/addContact">
				<button className="btn btn-success ms-auto m-3">Add new contact</button>
			</Link>
			<div className="container">
				<Contact />
			</div>
        </div>
	);
};
