import {
	UilClipboardAlt,
	UilUsdSquare,
	UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export const sidebarData = [
	{
		icon: AiOutlineThunderbolt,
		heading: "Energy",
	},
	// {
	//     icon: UilClipboardAlt,
	//     heading: "Orders",
	// },
	{
		icon: BsBoxes,
		heading: "Commodity",
	},
	{
		icon: FaPeopleCarry,
		heading: "Labour/Manpower",
		disabled: true,
		tooltip: "Coming Soon",
	},
	{
		icon: TbTruckDelivery,
		heading: "Supply Chain Data",
		disabled: true,
		tooltip: "Coming Soon",
	},
];

// Dashboard data
// import dashboardData from "../dashboardData.json"
import {
	dailyCapacityConsumed,
	monthlyCapacityConsumed,
	breakdowns,
	unitsProduced,
	sales,
	dailyUnitsConsumed,
	profit,
	commodityMetrics,
} from "../../dashboardData2.js";

export const energyCards = [
	{
		title: "Average capacity consumed",
		chartTitle: ["Daily capacity consumed", "Monthly capacity consumed"],
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 70,
		value1: dailyCapacityConsumed[5].value1,
		value2: dailyCapacityConsumed[5].value2,
		image: UilUsdSquare,
		dashboardData: [dailyCapacityConsumed, monthlyCapacityConsumed],
		series: [
			[
				{
					name: "Runtime",
					data: [1265, 1283, 1451, 1325, 1386, 1385],
				},
			],
			[
				{
					name: "Runtime",
					data: [13022, 12063, 14509, 12061, 14222, 14619],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["01/23", "02/23", "03/23", "04/23", "05/23", "06/23"],
			},
		],
		yaxis: [
			{
				title: {
					text: "kWh",
				},
			},
			{
				title: {
					text: "kWh",
				},
			},
		],
	},
	{
		title: "No. of breakdowns per day",
		chartTitle: ["Count of breakdowns", "Breakdown count and Hours lost"],
		// color: {
		// 	backGround: "linear-gradient(180deg, #ff919D 0%, #fc929d 100%)",
		// 	boxShadow: "0px 10px 20px 0px #fdc0c7",
		// },
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 79,
		value1: breakdowns[5].value3,
		value2: breakdowns[5].value2,
		image: UilMoneyWithdrawal,
		dashboardData: [breakdowns],
		series: [
			[
				{
					name: "Breakdowns",
					data: [1, 2, 0.5, 0, 1, 2],
				},
			],
			[
				{
					name: "Breakdowns",
					data: [1, 2, 0.5, 0, 1, 2],
				},
				{
					name: "Hours lost",
					data: [1, 3, 1, 0, 3, 1],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
				fillColor: "#ff919D",
			},
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
		],
		yaxis: [
			{
				title: {
					text: "kWh",
				},
			},
			{
				title: {
					text: "kWh",
				},
			},
		],
	},
	{
		title: "Product Unit Produced",
		chartTitle: ["Daily Units Produced", "Monthly Units Produced"],
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		// color: {
		// 	backGround:
		// 		"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
		// 	boxShadow: "0px 10px 20px 0px #f9d59b",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 73,
		value1: unitsProduced[5].value3,
		value2: unitsProduced[5].value2,
		image: UilClipboardAlt,
		dashboardData: [unitsProduced],
		series: [
			[
				{
					name: "Daily",
					data: [1441, 1489, 1494, 1448, 1212, 1491],
				},
			],
			[
				{
					name: "Monthly",
					data: [43230, 44670, 44820, 44330, 36360, 44730],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
		],
		yaxis: [
			{
				title: {
					text: "Quantity",
				},
			},
			{
				title: {
					text: "Quantity",
				},
			},
		],
	},
	{
		title: "Forecasted vs Actual Sales",
		chartTitle: ["Forecasted vs Actual Sales"],
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		// color: {
		// 	backGround: "linear-gradient(to bottom, #7aabe2, #7a54e2)",
		// 	boxShadow: "0px 10px 20px 0px #575f8d",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 73,
		value1: sales[5].value2,
		value2: sales[5].value1,
		image: UilClipboardAlt,
		dashboardData: [sales],
		series: [
			[
				{
					name: "Forecasted",
					data: [666566, 660042, 694867, 667783, 655410, 608617],
				},
				{
					name: "Actual",
					data: [608215, 615928, 611163],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"08/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
		],
		yaxis: [
			{
				title: {
					text: "kWh",
				},
			},
		],
	},
	{
		title: "Daily electricity units consumed",
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		// color: {
		// 	backGround: "linear-gradient(to bottom, #75df9b, #2878e8)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 73,
		value1: dailyUnitsConsumed[5].value2,
		value2: dailyUnitsConsumed[5].value1,
		image: UilClipboardAlt,
		dashboardData: [dailyUnitsConsumed],
		series: [
			[
				{
					name: "Daily",
					data: [1193, 1391, 1359, 1242, 1360, 1421],
				},
			],
			[
				{
					name: "Monthly",
					data: [35790, 41730, 77520],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Date",
				},
				categories: [
					"06/05/23",
					"07/05/23",
					"08/05/23",
					"09/05/23",
					"10/05/23",
					"11/05/23",
				],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Apr", "May", "Total Result"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Energy",
				},
			},
			{
				title: {
					text: "Energy",
				},
			},
		],
	},
	{
		title: "Forecasted vs Actual Profit",
		chartTitle: [
			"Projected and Actual Turnover",
			"Projected and Actual Profit",
		],
		// color: {
		// 	backGround: "linear-gradient(to bottom,#097969,#097969)",
		// 	boxShadow: "0px 10px 20px 0px #84ba96",
		// },
		// color: {
		// 	backGround:
		// 		"linear-gradient(180deg, #9e73ca 0%, #9374c2 50%, #7e73bb 100%)",
		// 	boxShadow: "0px 10px 20px 0px #b8b6e0",
		// },
		color: {
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 73,
		value1: profit[5].value2,
		value2: profit[5].value1,
		image: UilClipboardAlt,
		dashboardData: [profit],
		series: [
			[
				{
					name: "Projected",
					data: [686543, 603022, 632532, 640013, 611302, 623657],
				},
				{
					name: "Actual",
					data: [680594, 635669, 646142],
				},
			],
			[
				{
					name: "Projected",
					data: [217356, 213367, 127732, 206277, 134045, 129504],
				},
				{
					name: "Actual",
					data: [157628, 150945, 152757, 640013],
				},
			],
		],
		xaxis: [
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Turnover(₹)",
				},
			},
			{
				title: {
					text: "Profit(₹)",
				},
			},
		],
	},
];

export const commodityCards = [
	{
		title: "Raw material prices(Oil)",
		chartTitle: ["Oil Prices - Month"],
		open: true,
		// color: {
		// 	backGround: "radial-gradient(circle, #f9d9d9, #fb5749)",
		// 	boxShadow: "0px 10px 20px 0px #a5524a",
		// },
		color: {
			// backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			backGround: "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
		series: [
			[
				{
					name: "Oil Prices($)",
					data: [123.5, 928.6, 518.1, 933.3, 1018, 955.2],
				},
			],
			[
				{
					name: "Energy Units",
					data: [1974, 2138, 2217, 1859, 2259, 1659],
				},
				{
					name: "Quantity Dispatched",
					data: [33450, 26410, 30504, 28863, 25485, 26192],
				},
			],
		],

		xaxis: [
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Prices($)",
				},
			},
			{
				title: {
					text: "",
				},
			},
		],
	},
	{
		title: "Selling Prices",
		chartTitle: ["Oil Prices - Month"],
		open: false,
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
		series: [
			[
				{
					name: "Oil Prices($)",
					data: [123.5, 928.6, 518.1, 933.3, 1018, 955.2],
				},
			],
			[
				{
					name: "Energy Units",
					data: [1974, 2138, 2217, 1859, 2259, 1659],
				},
				{
					name: "Quantity Dispatched",
					data: [33450, 26410, 30504, 28863, 25485, 26192],
				},
			],
		],

		xaxis: [
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Prices($)",
				},
			},
			{
				title: {
					text: "",
				},
			},
		],
	},
	{
		title: "Product Tyres",
		chartTitle: ["Oil Prices - Month"],
		open: false,
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
		series: [
			[
				{
					name: "Oil Prices($)",
					data: [123.5, 928.6, 518.1, 933.3, 1018, 955.2],
				},
			],
			[
				{
					name: "Energy Units",
					data: [1974, 2138, 2217, 1859, 2259, 1659],
				},
				{
					name: "Quantity Dispatched",
					data: [33450, 26410, 30504, 28863, 25485, 26192],
				},
			],
		],

		xaxis: [
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Prices($)",
				},
			},
			{
				title: {
					text: "",
				},
			},
		],
	},
	{
		title: "Process of Product",
		chartTitle: ["Oil Prices - Month"],
		open: false,
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
		series: [
			[
				{
					name: "Oil Prices($)",
					data: [123.5, 928.6, 518.1, 933.3, 1018, 955.2],
				},
			],
			[
				{
					name: "Energy Units",
					data: [1974, 2138, 2217, 1859, 2259, 1659],
				},
				{
					name: "Quantity Dispatched",
					data: [33450, 26410, 30504, 28863, 25485, 26192],
				},
			],
		],

		xaxis: [
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
			{
				title: {
					text: "Month",
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			},
		],
		yaxis: [
			{
				title: {
					text: "Prices($)",
				},
			},
			{
				title: {
					text: "",
				},
			},
		],
	},
];

export const manpowerCards = [
	{
		title: "Labor Attendance",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
	{
		title: "Labor Movement",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
	{
		title: "Labor Productivity",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
];
export const supplyChainCards = [
	{
		title: "Inventory Levels",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
	{
		title: "Number of SC Partners",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
	{
		title: "Share of Suppliers and Customers",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
	{
		title: "Highest Debit and Credit Transactions",
		chartTitle: ["Oil Prices - Month"],
		color: {
			backGround: "#80808087",
			boxShadow: "0px 10px 20px 0px #808080",
		},
		// color: {
		// 	backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
		// 	boxShadow: "0px 10px 20px 0px #e0c6f5",
		// },
		barValue: 73,
		value1: commodityMetrics[6].value2,
		value2: commodityMetrics[6].value1,
		image: UilClipboardAlt,
		dashboardData: [commodityMetrics],
	},
];

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

export const updatesData = [
	{
		image: img3,
		name: "Helery Clint",
		notification: "has ordered Macbook M2 Air",
		time: "23 seconds ago",
	},
	{
		image: img2,
		name: "Raquel Shilon",
		notification: "has ordered Playstation 5 & PS5 Remote controller.",
		time: "4 minutes ago",
	},
	{
		image: img1,
		name: "Thomas Harper",
		notification: "has received FireFox Black Vegan Leather Backpack, 20L",
		time: "12 minutes ago",
	},
];
