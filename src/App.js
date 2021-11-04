import React from "react";
// import ProductList from "./component/ProductList";
//import Login from "./component/Login";
import Header from "./component/Header"
import Footer from "./component/Footer";
import OrderAdmin from "./component/OrderAdmin";
import Infor from "./component/Infor"
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
      {/* <div className="row">
        <OrderAdmin />
      </div>
      <div className="row">
        <Footer />
      </div> */}
      <Infor />
    </div>
  );
}

export default App;
