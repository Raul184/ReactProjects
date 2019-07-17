import React, { Component } from 'react'
import Chart from "react-apexcharts";

export default class ChartSamplesII extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				//styles
				chart: {
					background: "#f4f4f4",
					foreColor: "#333"
				},
				//eje x
				xaxis: {
					categories: [
						"New York", "LA", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Diego", "San Antonio", "Dallas", "San Jose"
					]
				},
				//FORMAT
				plotOptions: {
					bar: {
						horizontal: true
					}
				},
				fill: {
					colors: ["#f44336"]
				},
				dataLabels: {
					enabled: false
				},
				title: {
					text: "Largest US cities by population",
					align: "center",
					margin: 20,
					offsetY: 20,
					style: {
						fontSize: "25px"
					}
				}
			},
			//data
			series: [
				{
					name: "Population",
					data: [
						8550405,
						3971883,
						2920546,
						2296224,
						1567442,
						1563025,
						1469845,
						1394925,
						1300092,
						1026908
					]
				}
			]
		}
	}
	onClick = () => {
		this.setState({
			options: {
				...this.state.options,
				plotOptions: {
					...this.state.options.plotOptions,
					bar: {
						...this.state.options.plotOptions.bar,
						horizontal: !this.state.options.plotOptions.bar.horizontal
					}
				}
			}
		})
	};
		render() {
			return (
				<React.Fragment>
					<Chart
						options={this.state.options}
						series={this.state.series}
						type="bar"
						height="450"
						width="100%"
					/>
					<button onClick={this.onClick}>Format</button>
				</React.Fragment>
			)
		}
}