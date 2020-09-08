import { Avatar } from "@material-ui/core";
import React from "react";
import "../../Styles/Sidebar/Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__upper">
				<Avatar src="https://avatars.dicebear.com/api/male/123.svg" />
				<h5>Jack Delamou</h5>
			</div>
			<div className="side__lower" />
		</div>
	);
};

export default Sidebar;
