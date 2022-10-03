import React, { useState } from "react";

import style from "./InputForm.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

function InputForm({ setErrMsg, addUser }) {
	const [userName, setUserName] = useState("");
	const [age, setAge] = useState(0);

	const mine = [
		"ayishah",
		"ayisha",
		"aayishah",
		"aayisha",
		"aishat",
		"oyin",
		"oyinkansola",
		"adesewa",
		"sewa",
		"salami",
		"aishah",
	];

	const handleUserNameInput = (event) => {
		const userName = event.target.value.toString();
		setUserName(userName);
	};

	const handleAGeInput = (event) => {
		setAge(Number(event.target.value));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (/\d/.test(userName)) {
			setErrMsg("Invalid user name, Please enter a valid user name");
			return;
		}
		if (typeof age !== "number") {
			setErrMsg("Invalid age, Please enter a valid age");
			return;
		}
		if (age <= 0) {
			setErrMsg("Please enter a valid age (> 0)");
			return;
		}

		if (mine.includes(userName.toLowerCase()) && age === 21) {
			setErrMsg("Baby, Don't be in a hurry. February is almost here.");
			return;
		}

		if (mine.includes(userName.toLowerCase()) && age !== 20) {
			setErrMsg("Baby, that's not your age");
			return;
		}

		addUser(userName, age);
		setAge(0);
		setUserName("");
	};

	return (
		<Card>
			<form className={style.user_form}>
				<div className={style.form_group}>
					<label>User Name</label>
					<input type="text" value={userName} onChange={handleUserNameInput} />
				</div>
				<div className={style.form_group}>
					<label>Age(Years)</label>
					<input type="number" value={age} onChange={handleAGeInput} />
				</div>
				<Button type="submit" onClick={handleFormSubmit}>
					Add User
				</Button>
			</form>
		</Card>
	);
}

export default InputForm;
