import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";

function App() {
	const [currentTab, setCurrentTab] = useState("Energy");

	return (
		<div className="bg-purple-200 App">
			<div className="appContainer">
				{/* <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} /> */}
				<MainDash currentTab={currentTab} />
				{/* <RightSide /> */}
			</div>
		</div>
	);
}

export default App;
