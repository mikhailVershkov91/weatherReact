import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = () => {
	return (
		<div>
			<Helmet>
				<script src="../../js/parallax.js" type="text/javascript" />
			</Helmet>
		</div>
	);
};

export default HelmetComponent;
