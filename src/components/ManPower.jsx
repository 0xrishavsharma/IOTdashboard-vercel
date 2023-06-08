import React from "react";
import { manpowerCards } from "../data/data";
import Card from "./Card/Card";

const ManPower = () => {
	return (
		<div
			className={`grid ${manpowerCards.length <= 4
				? "grid-cols-[repeat(auto-fit,_minmax(min(250px,_90%),_275px))]"
				: "grid-cols-[repeat(auto-fit,_minmax(min(250px,_90%),_1fr))]"
				} gap-4 max-[1200px]:flex-col`}>
			{/* <div className="flex flex-col gap-12"> */}
			{manpowerCards.map((card, index) => {
				return (
					<div className="w-full" key={index}>
						<Card data={card} open={false} />
					</div>
				);
			})}
		</div>
	);
};

export default ManPower;
