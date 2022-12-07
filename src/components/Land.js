import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Content } from "./Content";

const Land = () => {

	const [tag, setTag] = useState(0);

	return (
		<div>
			<Header />
			<SideBar />
			<Content />
		</div>
	)
}

export default Land;