import React from "react";
import ReactDom from "react-dom";

import style from "./ErrorModal.module.css";
import Button from "./UI/Button";

const Modal = ({ msg, showError, ErrorModalToggleHandler }) => {
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

const ErrorModal = ({ msg, showError, ErrorModalToggleHandler }) => {
	return (
		<React.Fragment>
			{ReactDom.createPortal(
				<Modal
					msg={msg}
					showError={showError}
					ErrorModalToggleHandler={ErrorModalToggleHandler}
				/>,
				document.getElementById("modal-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
