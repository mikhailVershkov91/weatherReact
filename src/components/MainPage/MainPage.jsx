import React from "react";
import s from "./MainPage.module.css";

const MainPage = (props) => {

  const onClick = () => {
    
  }


	return (
		<div className={s.main}>
			<div className={s.content}>
				<div className={s.info}>
					<div className={s.container}>
						<div className={s.info__title}>
							Just start writing the name of the city...
						</div>
						<div className={s.info__row}>
							<div className={s.info__search}>
								<input type="text" placeholder="City..." />
							</div>
							<div className={s.info__btn}>
								<button onClick={onClick}>Search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
