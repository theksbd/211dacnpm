// import React from "react";
// // import ProductList from "./component/ProductList";
// //import Login from "./component/Login";
// import Header from "./component/Header"
// import Footer from "./component/Footer";
// import OrderAdmin from "./component/OrderAdmin";
// import Infor from "./component/Infor"
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="container">
//       <div className="row">
//         <Header />
//       </div>
//       {/* <div className="row">
//         <ProductList />
//       </div> */}
//       {/* <div className="row">
//         <Login />
//       </div> */}
//       {/* <div className="row">
//         <OrderAdmin />
//       </div>
//       <div className="row">
//         <Footer />
//       </div> */}
//       <Infor />
//     </div>
//   );
// }

//Tiến Lê

import './App.css';
import Infor from "./component/Infor";
import Cart from "./component/Cart";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer";
//import Footer from "./component/ProductList";
// import ProductList from "./component/ProductList";
export default function App() {
  return (
    <div className="container">
        <Header />
        <Infor image= "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
        productName= "Samsung Galaxy Note 20 Ultra 5G"
        newPrice= "20490000"
        rom1="128 GB"
        rom2="256 GB"
        rom3="512 GB"
        rom4="1TB"
        screen= "6.9"
        chip= "Exynos 990"
        ram= "12"
        pin= "4500 mAh"
        OS= "Android 10"
        />
        {/* <Cart image= "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
        productName= "Samsung Galaxy Note 20 Ultra 5G"
        newPrice= "20490000"
        /> */}
        <Footer /> 
    </div>
  );
}



// Tiến Minh

// export default App;
// import ProductList from "./component/HomePage/ProductList";
// import Login from "./component/Login"
// import Comment from "./component/Comment"

// export default function App() {
//   // return <ProductList /> 
//   // return <Login />
//   return <Comment />
// }
