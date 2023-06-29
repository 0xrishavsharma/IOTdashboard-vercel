import "./Card.scss";
import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Table from "../Table/Table";
import {
	dailyCapacityConsumed,
	monthlyCapacityConsumed,
	breakdowns,
	unitsProduced,
	sales,
	dailyUnitsConsumed,
	profit,
	commodityMetrics,
} from "../../../dashboardData2";

const Card = ({ data, open }) => {
	const [expanded, setExpanded] = useState(false);
	// const [data, setData] = useState([]);

	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard
					// sheetData={data}
					data={data}
					setExpanded={() => setExpanded(false)}
				/>
			) : (
				<CompactCard
					data={data}
					open={open}
					setExpanded={() => setExpanded(true)}
				/>
			)}
		</AnimateSharedLayout>
	);
};

function CompactCard({ data, setExpanded, open }) {
	// const Icon = data.image;
	// const percentage = data.barValue;
	return (
		// <motion.div/
		<div
			className={`${
				!open && "cursor-not-allowed transition-none shadow-none"
			} compactCard min-h-[100px] transition-shadow duration-300 ease-in-out`}
			onClick={open ? setExpanded : null}
			style={{
				background: data.color.backGround,
				boxShadow: open && data.color.boxShadow,
			}}
			layoutid="expandableCard">
			<div className="radialBar">
				{/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
				<span className="font-bold">{data.title}</span>
			</div>
			<div className="flex items-center justify-between">
				{/* <span>Last 24 hours</span> */}
				{/* <span className="text-3xl font-extrabold">{data.value1}</span> */}
				{/* <Icon /> */}
				{/* <span className="">{data.value2}</span> */}
			</div>
		</div>
	);
}
function ExpandedCard({ sheetData, data, setExpanded }) {
	const options = [];
	for (let i = 0; i < data.series.length; i++) {
		options.push({
			chart: {
				type: "bar",
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "60%",
					endingShape: "rounded",
					colors: {
						// backgroundBarColors: ["#f2f2f2"],
						// backgroundBarOpacity: 1,
						// backgroundBarRadius: 5,
						color: "red",
					},
				},
			},
			dataLabels: {
				enabled: true,
			},
			stroke: {
				show: false,
				width: 2,
				colors: ["transparent"],
			},
			xaxis: data.xaxis[i] ? data.xaxis[i] : data.xaxis,
			yaxis: data.yaxis[i] ? data.yaxis[i] : data.yaxis,
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val) {
						// return "$ " + val + " thousands";
						return val;
					},
				},
			},
		});
	}
	return (
		<motion.div className="flex justify-center w-full">
			<motion.div
				className="max-w-[1284px] z-20 expandedCard"
				style={{
					background: data.color.backGround,
					boxShadow: data.color.boxShadow,
				}}
				layoutId="expandableCard">
				<UilTimes
					className="absolute text-3xl text-white cursor-pointer top-4 right-4"
					onClick={setExpanded}
				/>
				<span className="mb-4 text-4xl font-black text-left text-white uppercase">
					{data.title}
				</span>
				<div>
					<Table data={data.dashboardData} />
				</div>
				<div className="flex gap-12 ">
					{data.series.map((item, i) => {
						return (
							<div key={i} className="chartContainer">
								<h3>{data.chartTitle && data.chartTitle[i]}</h3>
								<Chart
									series={data.series[i] ? data.series[i] : data.series}
									type="bar"
									options={options[i]}
									className="p-4 border-2 border-gray-200 rounded-md"
									title={data.yaxis[i].title.text}
									// chartTitle={data.chatTitle && data.chatTitle[i]}
									width="450px"
									id="chart"
								/>
							</div>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Card;
