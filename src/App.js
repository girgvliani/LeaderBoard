import React from "react";
import { useState } from "react";
import "./styles.css";
import users from "./data";
import { FaUnlockAlt } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

function App() {
	const [uname, setUname] = useState("");
	const [pass, setPass] = useState("");

	const checkcred = (e) => {
		e.preventDefault();
		for (var user of users) {
			if (user.username === uname && user.password === pass) {
				console.log("Welcome");
			}
		}
	};

	return (
		<section className="main">
			<h1 className="log-in">log in</h1>
			<img src="" className="img"></img>

			<img src={require("./assets/Hood.png")} alt="" className="hood"></img>
			<form className="input" onSubmit={(e) => checkcred(e)}>
				<div>
					<span className="icon_lock">
						<FaUnlockAlt />
					</span>
					<input
						type="input"
						value={uname}
						onChange={(e) => setUname(e.target.value)}
						placeholder="Enter your Username"
						className="input_box"
						required
					></input>
				</div>
				<div>
					<span className="icons">
						<IoPersonCircleSharp />
					</span>
					<input
						type="password"
						value={pass}
						placeholder="Enter your password"
						onChange={(e) => setPass(e.target.value)}
						required
					></input>
				</div>
				<div>
					<input type="checkbox" id="checkbox"></input>
					<label for="checkbox">remember me</label>
				</div>

				<div>
					<button className="input_submit" type="submit">
						submit
					</button>
				</div>
			</form>
		</section>
	);
}

export default App;
