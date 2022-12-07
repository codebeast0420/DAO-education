import React from "react";

export const FundItem = ({ amount, sort }) => {
	return (
		<div className="funds-item">
			<div className="funds-amount">{amount}$</div>
			<div className="funds-sort">{sort}</div>
		</div>
	)
}