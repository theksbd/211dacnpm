import React from "react";
// import './App.css';
import Infor from "./component/Infor";
import Cart from "./component/Cart";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer";
import Login from "./component/Login";
//import Footer from "./component/ProductList";
// import ProductList from "./component/ProductList";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
function App() {
  return (
    <div className="container">
        <Header />
        {/* <Infor /> */}
        <Cart/>
        {/* <Login /> */}
        <Footer /> 
    </div>
  );
}

export default App;
