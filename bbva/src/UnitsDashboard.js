import React, { Component } from 'react'
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
import "./styles/UnitsDashboard.css";
import { Link } from "react-router-dom";
import ChartSamples from "./AllCharts/ChartSamples";
import ChartSamplesII from "./AllCharts/ChartSamplesII";
import ChartSamplesIII from "./AllCharts/ChartSamplesIII";
import DonutChart from "./AllCharts/DonutChart";
import EditableTable from "./Editable/EditableTable";


export default class UnitsDashboard extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		sections: [
			{
				section: "Economic-Product",
				clicked: false
			},
			{
				section: "Solutions",
				clicked: false
			},
			{
				section: "Economics",
				false: false
			}]
	}
	render() {
		const lis = this.props.sections.map(elm => ( 
					<Link to={`${ this.props.match.params.id }/${elm.section}`}>
						<li>{elm.section}</li>
					</Link>
		))
		
  	return (
			<div className="UnitsDashboard">
				<nav className="UnitsNav">
					<h2>Employee Name</h2>	
					<ul>
						{lis}
					</ul>
				</nav>
				<div className="UnitsMain">
					<ChartSamples />
					<ChartSamplesII />
					<ChartSamplesIII />
					<DonutChart />
					<EditableTable />
				</div>
    	</div>
  	);
	}
}
