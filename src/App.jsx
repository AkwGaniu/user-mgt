import { useState } from "react";
import style from "./App.module.css";
import ErrorModal from "./components/ErrorModal";
import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import UsersList from "./components/UsersList";

const App = () => {
	const [showError, setShowError] = useState(false);
	const [errMsg, setErrMsg] = useState("");
  let [users, setUsers] = useState([
    // {
    //   userName: "Enny",
    //   age: 25
    // }
  ]);

	const toggleErrorModal = () => {
		setShowError((prevState) => !prevState);
	};

	const setErrorMessage = (msg) => {
		setErrMsg(msg);
		toggleErrorModal();
	};

	const addUser = (userName, age) => {
    setUsers(prev => {
      return [...prev, { userName, age }];
    })
	};

	return (
		<div className={style.main}>
			<Heading />
			<InputForm setErrMsg={setErrorMessage} addUser={addUser} />
			<UsersList users={users} />
			<ErrorModal
				msg={errMsg}
				showError={showError}
				ErrorModalToggleHandler={toggleErrorModal}
			/>
		</div>
	);
};

export default App;
