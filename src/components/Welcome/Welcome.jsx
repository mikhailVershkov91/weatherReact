import React from "react";
import s from "./Welcome.module.css";
import logo from "../../assets/logo.png";

const Welcome = () => {
	return (
		<div className={s.weather}>
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
