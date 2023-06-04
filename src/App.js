import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import users from "./data";

function App() {
	const [uname, setUname] = useState("");
	const [pass, setPass] = useState("");

	const checkcred = (e) => {
		e.preventDefault();
		for (var user of users) {
			if (user.username === uname && user.password === pass) {
				console.log("gj my man");
			}
		}
	};

	return (
		<section className="section">
			<p id="password"></p>
			<form className="input" onSubmit={(e) => checkcred(e)}>
				<img src="" alt="logo"></img>
				<input
					type="input"
					value={uname}
					onChange={(e) => setUname(e.target.value)}
					placeholder="Enter your Username"
					className="input_box"
					required
				></input>
				<img src="" alt="locklogo"></img>
				<input
					type="password"
					value={pass}
					placeholder="Enter your password"
					onChange={(e) => setPass(e.target.value)}
					required
				></input>
				<input type="checkbox" id="checkbox"></input>
				<label for="checkbox">remember me</label>
				<button className="input_submit" type="submit">
					submit
				</button>
			</form>
		</section>
	);
}

export default App;
