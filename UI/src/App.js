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
import Footer from "./component/Footer";
import Login from "./component/Login";
import AddItem from "./component/pages/AddItem"
import EditItem from "./component/pages/EditItem"
import ManagerItem from "./pages/ManagerItem"
import Admin from "./pages/Admin"



export default function App() {
  return (
    <div className="container-fluid">

      <Header />
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/OrderAdmin" exact component={OrderAdmin} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/Infor" exact component={Infor} />
            <Route path="/AddItem" exact component={AddItem} />
            <Route path="/ManagerItem" exact component={ManagerItem} />
            <Route path="/EditItem" exact component={EditItem} />
            <Route path="/" exact component={ProductList} />
          </Switch>
        </Router> 
      <Footer />
    </div>
  );
}
