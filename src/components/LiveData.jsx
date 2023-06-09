import React, { useEffect, useState } from "react";

const LiveData = ({
	data,
	cost,
	costLastUp,
	hourlyConsum,
	hourlyConsumLastUp,
	monthlyConsum,
	monthlyConsumLastUp,
	yearlyConsum,
	yearlyConsumLastUp,
}) => {
	const liveData = [
		{
			name: "Location Coordinates",
			value: 19.239616,
			valueHeading: "Longitude",
			value2: 72.84648,
			value2Heading: "Latitude",
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Today's Cost(₹)",
			value:
				data?.today_cost_kWh && "₹ " + data?.today_cost_kWh[0][1].slice(0, 7),
			// "₹ " + data?.today_cost_kWh[0][1].slice(0, 7),
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Hourly Consumption Data(kWh)",
			value:
				data?.hourly_consumption_kWh &&
				data?.hourly_consumption_kWh[0][1] + " kWh",
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
		{
			name: "Monthly Consumption Data(kWh)",
			value:
				data?.monthly_consumption_kWh &&
				data?.monthly_consumption_kWh[0][1] + " kWh",
			lastUpdated:
				data?.monthly_consumption_kWh && data?.monthly_consumption_kWh[0][0],
		},
		{
			name: "Yearly Consumption Data(kWh)",
			value:
				data?.yearly_consumption_kWh &&
				data?.yearly_consumption_kWh[0][1] + " kWh",
			lastUpdated:
				data?.hourly_consumption_kWh && data?.hourly_consumption_kWh[0][0],
		},
	];
	return (
		<div>
			{/* <div className="flex w-full h-[calc(100%_-_2rem)] gap-4 mt-4"> */}
			<div className="flex w-full h-full gap-4 mt-4">
				{liveData.map((item, i) => (
					<div
						key={i}
						className="flex w-full h-full justify-between flex-col gap-0 flex-[1] text-black bg-[#ffffff66] border-[1px] border-purple-950 rounded-md h-26 ">
						<h4 className="relative flex items-center px-2 py-1 text-xs font-semibold text-white max-w-max before:absolute before:left-0 before:rounded-tl-sm before:top-0 before:h-full before:w-full before:bg-purple-600">
							<span className="z-20">{item.name}</span>
						</h4>
						<div className="flex flex-col gap-1 px-4 py-2 ">
							{item.valueHeading ? (
								<h5 className="text-base font-bold">
									{item.value}{" "}
									<span className="text-sm">{item.valueHeading}</span>
								</h5>
							) : (
								<h5 className="text-xl font-bold">{item.value}</h5>
							)}
							{item.value2Heading && (
								<h5 className="text-base font-bold">
									{item.value2}{" "}
									<span className="text-sm">{item.value2Heading}</span>
								</h5>
							)}
							<h5 className="text-xs">
								{!item.value2 && (
									<>
										{new Date(item.lastUpdated).toLocaleDateString([], {
											year: "2-digit",
											month: "2-digit",
											day: "2-digit",
										})}{" "}
										{new Date(item.lastUpdated).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit",
										})}
										<span className="text-[9px] opacity-80">
											{" "}
											(Last Updated)
										</span>
									</>
								)}
							</h5>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LiveData;
