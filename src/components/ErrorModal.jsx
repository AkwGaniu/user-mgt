import React from "react";

import style from "./ErrorModal.module.css";
import Button from "./UI/Button";

const ErrorModal = ({ msg, showError, ErrorModalToggleHandler }) => {
	return (
		<div
			className={`${style.modal} ${
				showError ? style.show_error : style.hide_error
			}`}
		>
			<div className={style.modal_content}>
				<header>Invalid Input</header>
				<p>{msg}</p>
				<div className={style.button_holder}>
					<Button type="button" onClick={ErrorModalToggleHandler}>
						Okay
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
