import React from "react";
import Card from "./UI/Card";

import style from "./UsersList.module.css";

function UsersList({ users }) {
	const mine = [
		"ayishah",
		"aayishah",
		"aishat",
		"oyin",
		"oyinkansola",
		"adesewa",
		"salami",
		"aishah",
	];

	const love = (userName) => {
		return mine.includes(userName.toLowerCase());
	};

	return (
		<Card>
			<ul className={style.users_list}>
				<h3>List of User(s)</h3>
				{users.map((user, index) => {
					return (
						<li key={index} className={love(user.userName) && style.acommodate_love}>
							<span>
								{user.userName} ({user.age} years old)
							</span>
							{love(user.userName) && (
								<span className={style.heart}>&hearts;</span>
							)}
						</li>
					);
				})}
			</ul>
		</Card>
	);
}

export default UsersList;
