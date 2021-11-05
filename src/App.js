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
import ManagerItem from "./pages/ManagerItem"



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
        {/* <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/OrderAdmin" exact component={OrderAdmin} />
            <Route path="/Infor" exact component={Infor} />
            <Route path="/AddItem" exact component={AddItem} />
            <Route path="/EditItem" exact component={EditItem} />
            <Route path="/" exact component={ProductList} />
          </Switch>
        </Router> */}
        {/* <AddItem /> */}
        {/* <ManagerItem /> */}
        <EditItem />
      </div>
      <Footer />
    </div>
  );
}

// import ProductList from "./component/ProductList";
// import Login from "./component/Login"
// import EditItem from "./pages/EditItem";
// import AddItem from "./pages/AddItem";
// import Admin from "./pages/Admin";
// import ManagerItem from "./pages/ManagerItem";
// import React, {Component}from 'react'
// import axios from 'axios';
// // import EditItem from "./component/test";
// import ImageUploadPreviewComponent from './component/ImageUploadPreviewComponent'
// import {
//   BrowserRouter,
//   Switch,
//   Route
// } from 'react-router-dom';
// export default class App extends Component {
//   render(){
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" element={EditItem} />
//         <Route path="editItem/*" element={EditItem } />
//         <Route path="addItem/*" element={AddItem } />
//         <Route path="admin/*" element={Admin } />
//         <Route path="managerItem/*" element={ManagerItem } />
//       </Switch>
//     </BrowserRouter>
//   );
//   }
// }

