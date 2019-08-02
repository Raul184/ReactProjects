import React from 'react';
import './App.css';
//Pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import CartPage from "./components/pages/CartPage";
import ProductsPage from "./components/pages/ProductsPage";
import OneProductPage from "./components/pages/OneProductPage";
import Default from "./components/pages/Default";

//ROUTING
import { Switch, Route } from "react-router-dom";
//MAIN WEB COMPONENTS
import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";


export default class App extends React.Component {
  render() {
    return <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route exact path="/contact" render={() => <ContactPage />} />
        <Route exact path="/products" render={() => <ProductsPage />} />
        <Route exact path="/product/:id" render={() => <OneProductPage />} />
        <Route exact path="/cart" render={() => <CartPage />} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  }
}

