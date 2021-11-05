import React from "react";
import ProductList from "./component/HomePage/ProductList";
import OrderAdmin from "./component/OrderAdmin"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Infor from "./component/Infor";
import Cart from "./component/Cart";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer";
import Login from "./component/Login";
import AddItem from "./component/pages/AddItem"
import EditItem from "./component/pages/EditItem"


export default function App() {
  return (
    <div className="container">
      {/* 
        <Infor />
        <Cart/>
        <Login />
          */}
      <Header />
      <div class="row">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/OrderAdmin" exact component={OrderAdmin} />
            <Route path="/Infor" exact component={Infor} />
            <Route path="/AddItem" exact component={AddItem} />
            <Route path="/EditItem" exact component={EditItem} />
            <Route path="/" exact component={ProductList} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

