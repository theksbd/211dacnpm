import React from "react";
import ProductList from "./component/ProductList";
<<<<<<< HEAD
//import Login from "./component/Login";
import Header from "./component/Header"
import Footer from "./component/Footer";
import OrderAdmin from "./component/OrderAdmin";
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
=======
import Login from "./component/Login"
import EditItem from "./pages/EditItem"
import AddItem from "./pages/AddItem"

export default function App() {
  // return <ProductList /> 
  // return <Login />
  // return <EditItem /> 
  return <AddItem /> 

}
>>>>>>> quan
