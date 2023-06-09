import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import EnergyTab from "../EnergyTab";
import CommodityTab from "../CommodityTab";
import ManPower from "../ManPower";
import SupplyChain from "../SupplyChain";
import LiveData from "../LiveData";
import axios from "axios";

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

	// useEffect(() => {
	// 	WebSocketAPI();
	// }, []);

	async function WebSocketAPI() {
		// const loginRes = await axios.post("http://localhost:5000/api/auth/login");
		const loginRes = await axios.post(
			"https://iotdashboard-server.onrender.com/api/auth/login"
		);
		console.log("loginRes", loginRes.data.token);
		const token = loginRes?.data?.token;
		// var token =
		// 	"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWdoYXZAZXF1aWRlaS5jb20iLCJ1c2VySWQiOiJkYzQwODBiMC1lNzUzLTExZWQtYTQwMi05MWI4ZjM0Yzc2ZTEiLCJzY29wZXMiOlsiQ1VTVE9NRVJfVVNFUiJdLCJzZXNzaW9uSWQiOiJhZDI1ZWEzMi1mNzk0LTQzMDYtODZlZC0zZDQxZGIwNjg4ZGUiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY4NjYzNDkyNiwiZXhwIjoxNjg2NzIxMzI2LCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMTEyZjQ2ZjAtMmJlYy0xMWVjLWI1NGEtNTE3MGFiZWE5NDJkIiwiY3VzdG9tZXJJZCI6ImZkZTgzZTEwLWQzOTAtMTFlYy05ZDk5LTUxOTdhODE4MDVjZiJ9.FKb84TMF8MdIlTZPLZ1eLsUXOGgPeS_WwePLsGkDcR5RJfyaNgifZV6UDu5YTsQ7hYQLExb4iL773cyYGbWVYg";
		var entityId = "cac8a830-c1fc-11ec-9d99-5197a81805cf";
		const endpoint =
			process.env.NODE_ENV === "production"
				? "wss://flowlinc.io/api/ws/plugins/telemetry?token="
				: "ws://flowlinc.io:8080/api/ws/plugins/telemetry?token=";
		const finalToken =
			process.env.NODE_ENV === "production" ? loginRes?.token : token;
		var webSocket = new WebSocket(endpoint + token);
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
			console.log("Connection is opened");
		};

		webSocket.onmessage = function (event) {
			const res = event.data;
			const received_msg = JSON.parse(res);
			const dataArray = Object.entries(received_msg.data);
			for (let i = 0; i < dataArray.length; i++) {
				if (dataArray[i] === null || dataArray[i] === undefined) {
					dataArray.splice(i, 1);
				}
			}
			console.log("DataArray", dataArray);
			const dataObject = Object.fromEntries(dataArray);
			console.log("Data Object", dataObject);
			// console.log("received_msg", received_msg);
			// alert("Message is received: " + received_msg);
			setData(dataObject);

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
			console.log("Connection is closed!");
		};
	}
	return (
		<div className="flex justify-center w-[calc(100%_-_32px)] max-w-full">
			<div className="flex relative max-w-[1284px] flex-col gap-12 w-full min-h-[calc(100vh_-_8rem)] max-[1200px]:mt-6 max-[1200px]:flex-start">
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

				<div className="flex flex-col justify-center">
					<div className="flex max-w-[1284px] flex-col gap-3">
						<h1 className="relative pl-3 text-3xl font-black before:bg-purple-600 before:absolute before:left-0 before:top-0 before:h-full before:w-1">
							Energy
						</h1>
						<EnergyTab />
					</div>
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
		</div>
	);
};

export default MainDash;
