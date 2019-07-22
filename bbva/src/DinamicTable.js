import React, { Component } from 'react'
import Tabs from "./Tabs";
import Chart from "./AllCharts/DonutChart";
import Axios from 'axios';
import Joke from "./Joke";
import uuid from "uuid";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
//styles
import "./styles/DinamicTable.css";

export default class DinamicTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: "aTab",
			jokes: [],
			board: []
		}
	}
	static defaultProps = {
    url: "https://icanhazdadjoke.com/search",
    ncols: 5,
		nrows: 4
	}
	
	//TEST
	componentDidMount(){
    //get info to display Table
    this.state.jokes.length === 0 && this.getJokes();
  }

  //Jokes Getter
  async getJokes(){
    try{
      //send request
      const request = await Axios.get(this.props.url, {headers: { Accept: "application/json"}});
      //formatted response
			const response = request.data.results;
			console.log(response);
      //set
      this.setState({
        jokes : response
      })
      //update Board
      this.createBoard();
    }
    catch(e)
    {
      alert(e);
    }
  }
  //Table creation
  createBoard() {
    let boardF = [];
    let counter = 0;
    //rows
    for (let r = 0; r < this.props.nrows; r++) {
      let row = [];
      //columns
      for (let c = 0; c < this.props.ncols; c++) {
        row.push(
          <Joke id={uuid()} jokes={this.state.jokes[counter].joke} />)
        counter++ 
      }
      boardF.push(<tr key={r}>{row}</tr>);
    }
    //format created for table ready to go
    this.setState({
      board: boardF
    });
  }

	/////////////////////////////////////////////TEST
	render() {

		//Content on Tabs to displayed on Click
		const content = {
			aTab: [<p>employees_number: 10000</p>,
				<p>bbva_classification_desc: Normal</p>,
				<p>participand_id: {Math.floor(Math.random() * 25)}</p>,
				<p>participant_name: {this.props.match.params.name}</p>,
				<p>participant_type: Client</p>,
				<p>participant_seniority_date: 1950</p>,
				<p>credit_drawn_amount: 200.000 €</p>,
				<p>annual_billing_amount: 300.000.000€</p>
			],
			bTab: "BBVA Distribution",
			cTab: "BBVA Business",
			dTab: "Risk",
			eTab: "BBVA Potential",
			fTab: "Commercial Activity",
			gTab: this.state.board
		}

		return (
			<>
				<nav className="ListadoNav">
					<div className="logo">
						<Link to="/">
							<img className="BULogo" src={Logo} alt="BBVA Logo"/>	
						</Link>
					</div>
					<h1>Client Details</h1>
				</nav>
				<div className="DinamicTable">
					<h2>Pérfil</h2>
					<div className="DinamicTableMedia">
						<button>Exportar</button>
						<button>Descargar</button>
					</div>
					<Tabs 
						active={this.state.active}
						onChange={active => this.setState({ active })}
						chart={Chart}
					>
						<div key="aTab">Client Info</div>
						<div key="bTab">BBVA Distribution</div>
						<div key="cTab">BBVA Business</div>
						<div key="dTab">Risk</div>
						<div key="eTab">BBVA Potential</div>
						<div key="fTab">Commercial Activity</div>
						<div key="gTab">Transactions & Interactions</div>
					</Tabs>
					{/* <h2 className="DinamicTableContent">Content</h2> */}
					<p className="DinamicTableContent">{
						content[this.state.active]
					}	
					</p>
				</div>
			</>
		)
	}
}
