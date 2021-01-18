import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = () => {
	console.log("helmet");
	return (
		<div>
			<Helmet>
				<script src="../../js/parallax.js" type="text/javascript" />
			</Helmet>
		</div>
	);
};

export default HelmetComponent;
