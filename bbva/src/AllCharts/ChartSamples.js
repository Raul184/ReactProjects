import React, { Component } from 'react'
//chart.js
import { Line } from 'react-chartjs-2';

const style = {
	position: "relative",
	height: "auto"
}
export default class ChartSamples extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				labels: ["1", "2", "3", "4", "5"],
				datasets: [
					{
						label: "MaquetaSales",
						backgroundColor: "rgba(255, 0, 255, .75)",
						data: [4, 5, 1, 10, 32, 2, 12]
					},
					{
						label: "Costes",
						backgroundColor: "rgba(0, 255, 0, .75)",
						data: [12, 4, 5, 0, 2, 8, 15]
					}
				]
			}
		}
	}
	setGradientColor = (canvas, color) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 600, 550);
		gradient.addColorStop(0, color);
		gradient.addColorStop(0.95, "rgba(133, 122, 144, .5)");
		return gradient;
	}
	getChartData = canvas => {
		//right of the bat 
		const data = this.state.data;
		if (data.datasets) {
			let colors = ["rgba(0, 255, 0, .75)", "rgba(0, 255, 0, .75)"];
			data.datasets.forEach((set, i) => {
				set.backgroundColor = this.setGradientColor(canvas, colors[i]);
				set.borderColor = "white";
				set.borderWidth = 2;
			});
		}
		return data;
	}
	render() {
		return (
			<div className="Chart" style={style}>
				<h3>Samples for data manipulation, display and testing</h3>
				<Line 
					//props
					options={{responsive: true}}
					data={this.getChartData}
				/>
			</div>
		)
	}
}
