import "./MainDash.scss";
import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import EnergyTab from "../EnergyTab";
import CommodityTab from "../CommodityTab";
import ManPower from "../ManPower";
import SupplyChain from "../SupplyChain";
import LiveData from "../LiveData";
import textLogo from "../../img/logo/logoText.png";
import imgLogo from "../../img/logo/logoImg.png";
const MainDash = ({ currentTab }) => {
	// const range = ['B1:C7', 'B11:C17', 'B21:D25', 'B29:D38', 'B42:E47', 'B51:D56']
	const [data, setData] = useState();

	// Websocket values
	// const [cost, setCost] = useState();
	// const [costLastUp, setCostLastUp] = useState();

	// const [hourlyConsum, setHourlyConsum] = useState();
	// const [hourlyConsumLastUp, setHourlyConsumLastUp] = useState();

	// const [monthlyConsum, setMonthlyConsum] = useState();
	// const [monthlyConsumLastUp, setMonthlyConsumLastUp] = useState();

	// const [yearlyConsum, setYearlyConsum] = useState();
	// const [yearlyConsumLastUp, setYearlyConsumLastUp] = useState();

	useEffect(() => {
		WebSocketAPI();
	}, []);

	async function WebSocketAPI() {
		const loginRes = await fetch("https://flowlinc.io:443/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: "raghav@equidei.com",
				password: "@Equidei123",
			}),
		});
		console.log("loginRes", loginRes);
		var token =
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWdoYXZAZXF1aWRlaS5jb20iLCJ1c2VySWQiOiJkYzQwODBiMC1lNzUzLTExZWQtYTQwMi05MWI4ZjM0Yzc2ZTEiLCJzY29wZXMiOlsiQ1VTVE9NRVJfVVNFUiJdLCJzZXNzaW9uSWQiOiJmMmZlOTQ3YS00M2ZkLTQ1YTctOTNmMS0xNmU2MWQwYTliYjkiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY4NjIzMTE0MSwiZXhwIjoxNjg2MzE3NTQxLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMTEyZjQ2ZjAtMmJlYy0xMWVjLWI1NGEtNTE3MGFiZWE5NDJkIiwiY3VzdG9tZXJJZCI6ImZkZTgzZTEwLWQzOTAtMTFlYy05ZDk5LTUxOTdhODE4MDVjZiJ9.QrbRvQ9nbPct8uGMyjFkLizan-LjEVHhsMR-OdZTGmLiEg5Hl11v2WkhxTdPhmBbFPluqhmc0nvtXQq-UMHJ8w";
		var entityId = "cac8a830-c1fc-11ec-9d99-5197a81805cf";
		var webSocket = new WebSocket(
			"ws://flowlinc.io:8080/api/ws/plugins/telemetry?token=" + token
		);
		webSocket.onopen = function () {
			var object = {
				tsSubCmds: [
					{
						entityType: "DEVICE",
						entityId: entityId,
						scope: "LATEST_TELEMETRY",
						cmdId: 10,
					},
				],
				historyCmds: [],
				attrSubCmds: [],
			};
			var data = JSON.stringify(object);
			webSocket.send(data);
			console.log("Connection is opened with data:", data);
		};

		webSocket.onmessage = function (event) {
			var res = event.data;
			var received_msg = JSON.parse(res);
			const modifiedData = setData(received_msg?.data);
			setData(received_msg?.data);

			// setCost(
			// 	received_msg?.data?.today_cost_kWh &&
			// 		"₹ " + received_msg.data?.today_cost_kWh[0][1].slice(0, 7)
			// );
			// setCostLastUp(
			// 	received_msg.data?.hourly_consumption_kWh &&
			// 		received_msg.data?.hourly_consumption_kWh[0][0]
			// );
			// setHourlyConsum(
			// 	received_msg?.data?.hourly_consumption_kWh &&
			// 		received_msg?.data?.hourly_consumption_kWh[0][1] + " kWh"
			// );
			// setHourlyConsumLastUp(
			// 	received_msg?.data?.hourly_consumption_kWh &&
			// 		received_msg?.data?.hourly_consumption_kWh[0][0]
			// );
			// setMonthlyConsum(received_msg?.data?.monthly_consumption_kWh[0][1]);
			// setMonthlyConsumLastUp();
			// setYearlyConsum(received_msg?.data?.yearly_consumption_kWh[0][1]);
			// setYearlyConsumLastUp();
		};

		webSocket.onclose = function (event) {
			// alert("Connection is closed!");
			console.log("Connection is closed!");
		};
	}
	return (
		<div className="mainDash">
			<div className="flex items-center justify-between">
				<div className="flex gap-4">
					<div className="flex items-center gap-1">
						<img src={imgLogo} className="w-auto h-12 mb-1" alt="" />
						<img src={textLogo} className="w-auto h-8" alt="" />
					</div>
					{/* <button
						onClick={WebSocketAPI}
						className="px-4 py-0 font-bold text-white bg-purple-600 rounded max-h-max hover:bg-purple-800">
						Fetch Data
					</button> */}
				</div>
				<div className="right-0 flex flex-col gap-4 ">
					<div className="flex gap-4 text-3xl">
						<span className="font-bold">EWS Score:</span>
						<span className="font-extrabold text-yellow-600">878</span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex">
							<div className="flex items-center w-40 gap-1 text-sm">
								<span className="bg-green-600 border-[1px] border-green-700 h-3 w-3"></span>
								<span className="">1000-900</span>
								<span className="text-green-600 ">Excellent</span>
							</div>
							<div className="flex items-center w-40 gap-1 text-sm">
								<span className="bg-yellow-600 border-[1px] border-yellow-700 h-3 w-3"></span>
								<span className="">900-800</span>
								<span className="text-yellow-600 ">Good</span>
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center w-40 gap-1 text-sm">
								<span className="bg-orange-500 border-[1px] border-orange-700 h-3 w-3"></span>
								<span className="">800-700</span>
								<span className="text-orange-500 ">Average</span>
							</div>
							<div className="flex items-center w-40 gap-1 text-sm">
								<span className="bg-red-500 border-[1px] border-red-700 h-3 w-3"></span>
								<span className=""> {"<"}700</span>
								<span className="text-red-500 ">Bad</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* {currentTab === "Energy" ? <EnergyTab /> : <CommodityTab />} */}
			<div className="relative flex justify-between w-full">
				<div className="flex flex-col w-full gap-3">
					<h1 className="relative flex gap-4 pl-3 font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						<span className="text-3xl">Live Data</span>
						<button
							onClick={WebSocketAPI}
							className="px-2 py-1 font-bold text-purple-600 border-[1px] border-purple-600 rounded max-h-max hover:bg-purple-600 hover:text-white">
							Fetch Latest Data
						</button>
					</h1>
					<LiveData data={data} />
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<h1 className="relative pl-3 text-3xl font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
					Energy
				</h1>
				<EnergyTab />
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="relative pl-3 text-3xl font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
					Commodity
				</h1>
				<CommodityTab />
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="flex items-center gap-3">
					<span className="relative pl-3 text-3xl font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						Man Power
					</span>
					<span className="self-end mb-1 opacity-80">(coming soon...)</span>
				</h1>
				<ManPower />
			</div>
			<div className="flex flex-col gap-3 cursor-not-allowedddds">
				<h1 className="flex gap-3">
					<span className="relative pl-3 text-3xl font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
						{" "}
						Supply chain
					</span>
					<span className="self-end mb-1 opacity-80 ">(coming soon...)</span>
				</h1>
				<SupplyChain />
			</div>
		</div>
	);
};

export default MainDash;
