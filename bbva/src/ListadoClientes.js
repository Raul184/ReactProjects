import React, { Component } from 'react'
//Styles
import "./styles/ListadoClientes.css";
//a
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
//Clients
import Client from "./Client";
//key
// const uuidv4 = require('uuid/v4');

export default class ListadoClientes extends Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
		this.updateSearch = this.updateSearch.bind(this);
	}

	//DEFAULT PROPS
	static defaultProps = {
		clients: [
			{ id: 1, cliente: "Telefonica", tipo: "Cliente" },
			{ id: 2, cliente: "Telefo", tipo: "Cliente" },
			{ id: 3, cliente: "Fonica", tipo: "Cliente" },
			{ id: 4 , cliente: "Inditex" , tipo: "No Cliente"  },
			{ id: 5 , cliente: "Zara" , tipo: "Cliente"  },
			{ id: 6 , cliente: "Wallapop" , tipo: "Cliente"  },
			{ id: 7 , cliente: "GLovo" , tipo: "No Cliente"  },
			{ id: 8 , cliente: "Mercadona" , tipo: "Cliente"  },
			{ id: 9 , cliente: "Dia" , tipo: "No Cliente"  },
			{ id: 10 , cliente: "Repsol" , tipo: "Cliente"  },
			{ id: 11 , cliente: "Cepsa" , tipo: "Cliente"  },
			{ id: 12, cliente: "Mango", tipo: "Cliente" },
			{ id: 13, cliente: "ACS", tipo: "Cliente" },
			{ id: 14, cliente: "Sacyr", tipo: "No Cliente" },
			{ id: 15 , cliente: "Navantia" , tipo: "No Cliente"  },
			{ id: 16 , cliente: "Tarradellas" , tipo: "Cliente"  },
			{ id: 17 , cliente: "Carbonell" , tipo: "Cliente"  },
			{ id: 18 , cliente: "Ibericos" , tipo: "No Cliente"  },
			{ id: 19 , cliente: "Corte Ingles" , tipo: "No Cliente"  },
			{ id: 20 , cliente: "Apis" , tipo: "No Cliente"  }
			// { id: 21 , cliente: "Bluetab" , tipo: "Cliente"  },
			// { id: 22 , cliente: "Iberdrola" , tipo: "Cliente"  },
			// { id: 23, cliente: "Aena", tipo: "Cliente" },
			// { id: 24, cliente: "Endesa", tipo: "Cliente" },
			// { id: 25, cliente: "Caixa", tipo: "No Cliente" }
		]
	}
	//On Search
	updateSearch(e) {
		this.setState({
			search: e.target.value.substr(0, 20)
		})
	}
	render() { 
		//filter
		let filter = this.props.clients.filter(
			(client) => {
				return client.cliente.indexOf(this.state.search) !== -1
			});

		return (
			<div className="ListadoActividades">
				<nav className="ListadoNav">
					<div className="logo">
						<Link to="/">
							<img className="BULogo" src={Logo} alt="BBVA Logo"/>	
						</Link>
					</div>
					<label htmlFor="Search" className="ListadoNavSearch">Search
					<input
						type="text"
						value={this.state.search} onChange={this.updateSearch}	/></label>
				</nav>
				<ul className="listaClientesHead">
					<li><span>ID</span></li>
					<li><span>CLIENTE</span></li>
					<li><span>TIPO</span></li>
				</ul>
				{/* FILTERED LIST */}
				<ul className="listaClientesDB">
					{filter.map(client => 
						<Client
							contact={client} key={client.id} route={this.props.match.url}
						/>
					)}
				</ul>
			</div>
		)
	}
}