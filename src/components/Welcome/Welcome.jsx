import React, { useEffect } from "react";
import s from "./Welcome.module.css";
import logo from "../../assets/logo.png";

const Welcome = () => {
	// useEffect(() => {
	// 	const script = document.createElement("script");
	// 	script.src = "../../js/parallax.js";
	// 	script.async = true;
	// 	document.body.appendChild(script);
	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, []);

	return (
		<div id={s.weather}>
			<div className={s.layer5}></div>
			<div className={s.layer4}></div>
			<div className={s.layer3}></div>
			<div className={s.logo}>
				<div className={s.logoimg}>
					<img src={logo} alt="logo" />
				</div>
			</div>
			<div className={s.layer2}></div>
			<div className={s.layer1}></div>
		</div>
	);
};

export default Welcome;