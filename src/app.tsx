import React from "react";
import Navbar from "./components/navbar";
import {  About, Btn, Com, Footer, Speak, Table } from "./components";
// import Speak from "./components/speak";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Btn />
				<Speak />
				<About/>
    <Com />
				<Footer/>
				<Table/>
			</div>
		);
	}
}
