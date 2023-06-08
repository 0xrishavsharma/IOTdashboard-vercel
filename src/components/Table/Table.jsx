import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { yellow } from "@mui/material/colors";
import "./Table.scss";

function createData(product, orderId, date, status) {
	return { product, orderId, date, status };
}

const rows = [
	createData("PET Bottles - 5EDW", 356891, "10th May 2023", "Approved"),
	createData("Steel Plates - 34339", 356890, "9th May 2023", "Pending"),
	createData("PET raw pallets", 356889, "9th May 2023", "Delivered"),
	createData("Steel Plates - 2000", 356888, "8th May 2023", "Approved"),
	createData("3 Inch Bolt - 4422", 356887, "8th May 2023", "Approved"),
];

export default function BasicTable({ data }) {
	const makeStyles = (status) => {
		if (status == "Approved") {
			return {
				background: "rgb(145 254 159 / 47%)",
				color: "green",
				padding: "0.2rem 0.3rem",
				borderRadius: "5px",
			};
		} else if (status == "Pending") {
			return {
				background: "#ffadad8f",
				color: "red",
				padding: "0.2rem 0.3rem",
				borderRadius: "5px",
			};
		} else {
			return {
				// background: "#00b7ffbe",
				// color: "white",
				padding: "0.2rem 0.3rem",
				borderRadius: "5px",
			};
		}
	};
	const dashboardRows = [];
	for (let i = 0; i < data.length; i++) {
		dashboardRows.push([]);

		dashboardRows[i].push(
			createData(
				data && (data[i][1] ? data[i][1].value1 : data[1].value1),
				data && (data[i][1] ? data[i][1].value2 : data[1].value2),
				data && (data[i][1] ? data[i][1].value3 : data[1].value3),
				data && (data[i][1] ? data[i][1].value4 : data[1].value4)
			),
			createData(
				data && (data[i][2] ? data[i][2].value1 : data[2].value1),
				data && (data[i][2] ? data[i][2].value2 : data[2].value2),
				data && (data[i][2] ? data[i][2].value3 : data[2].value3),
				data && (data[i][2] ? data[i][2].value4 : data[2].value4)
			),
			createData(
				data && (data[i][3] ? data[i][3].value1 : data[3].value1),
				data && (data[i][3] ? data[i][3].value2 : data[3].value2),
				data && (data[i][3] ? data[i][3].value3 : data[3].value3),
				data && (data[i][3] ? data[i][3].value4 : data[3].value4)
			),
			createData(
				data && (data[i][4] ? data[i][4].value1 : data[4].value1),
				data && (data[i][4] ? data[i][4].value2 : data[4].value2),
				data && (data[i][4] ? data[i][4].value3 : data[4].value3),
				data && (data[i][4] ? data[i][4].value4 : data[4].value4)
			),
			createData(
				data && (data[i][5] ? data[i][5].value1 : data[5].value1),
				data && (data[i][5] ? data[i][5].value2 : data[5].value2),
				data && (data[i][5] ? data[i][5].value3 : data[5].value3),
				data && (data[i][5] ? data[i][5].value4 : data[5].value4)
			),
			createData(
				data && (data[i][6] ? data[i][6].value1 : data[6].value1),
				data && (data[i][6] ? data[i][6].value2 : data[6].value2),
				data && (data[i][6] ? data[i][6].value3 : data[6].value3),
				data && (data[i][6] ? data[i][6].value4 : data[6].value4)
			)
		);
	}

	const tableBorderRadius = "0px 0px 4px 4px";
	return (
		<div className="table">
			{!data && <h3>{!data && "Recent Transactions"}</h3>}
			<div className="flex gap-12">
				{dashboardRows.map((mainRow, i) => {
					return (
						<div key={i + 1}>
							{data[i][0]?.heading && (
								<h2 className="px-2 py-1 text-lg font-black text-white border-2 border-b-0 border-white rounded-tr-md rounded-tl-md ">
									{data[i][0]?.heading}
								</h2>
							)}
							<TableContainer
								component={Paper}
								className="shadow-[0px_13px_20px_0px_#80808029]"
								style={{
									background: "none",
									borderRadius: `${data[i][0]?.heading && "0px 0px 4px 4px"}`,
								}}>
								<div className="bg-white">
									<Table sx={{ minWidth: 300 }} aria-label="simple table">
										<TableHead>
											{data ? (
												<TableRow>
													<TableCell>
														{(data[i][0] && data[i][0].heading1) ||
															data[0].heading1}
													</TableCell>
													<TableCell align="left">
														{data[i][0]
															? data[i][0].heading2
															: data[0].heading2}
													</TableCell>
													{(data[0][0].heading3 || data[0].heading3) && (
														<TableCell align="left">
															{data[0][0]
																? data[0][0].heading3
																: data[0].heading3}
														</TableCell>
													)}
													{(data[0][0].heading4 || data[0].heading4) && (
														<TableCell align="left">
															{data[0][0]
																? data[0][0].heading4
																: data[0].heading4}
														</TableCell>
													)}
												</TableRow>
											) : (
												<TableRow>
													<TableCell>Product</TableCell>
													<TableCell align="left">Order Id</TableCell>
													<TableCell align="left">Date&nbsp;</TableCell>
													<TableCell align="left">Status&nbsp;</TableCell>
												</TableRow>
											)}
										</TableHead>
										<TableBody>
											{dashboardRows
												? mainRow.map((row, i) => (
														<TableRow
															key={i}
															sx={{
																"&:last-child td, &:last-child th": {
																	border: 0,
																},
															}}>
															<TableCell component="th" scope="row">
																{row.product}
															</TableCell>
															<TableCell align="left">{row.orderId}</TableCell>
															<TableCell align="left">{row.date}</TableCell>
															{data && (
																<TableCell align="left">
																	<p className="status">{row.status}</p>
																</TableCell>
															)}
														</TableRow>
												  ))
												: mainRow.map((row, i) => (
														<TableRow
															key={i}
															sx={{
																"&:last-child td, &:last-child th": {
																	border: 0,
																},
															}}>
															<TableCell component="th" scope="row">
																{row.product}
															</TableCell>
															<TableCell align="left">{row.orderId}</TableCell>
															<TableCell align="left">{row.date}</TableCell>
															{!data && (
																<TableCell align="left">
																	<span
																		className="status"
																		style={makeStyles(row.status)}>
																		{row.status}
																	</span>
																</TableCell>
															)}
															{!data && (
																<TableCell align="left" className="details">
																	details
																</TableCell>
															)}
														</TableRow>
												  ))}
										</TableBody>
									</Table>
								</div>
							</TableContainer>
						</div>
					);
				})}
			</div>
		</div>
	);
}
