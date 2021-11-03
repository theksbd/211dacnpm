import React from "react";
import ProductList from "./components/ProductList";
//import Login from "./components/Login";
import Header from "./components/Header"
import Footer from "./components/Footer";
import OrderAdmin from "./components/OrderAdmin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      {/* <div className="row">
        <ProductList />
      </div> */}
      {/* <div className="row">
        <Login />
      </div> */}
      <div className="row">
        <OrderAdmin />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;