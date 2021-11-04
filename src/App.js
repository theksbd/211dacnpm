import React from "react";
import './App.css';
import Infor from "./component/Infor";
import Cart from "./component/Cart";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer";
//import Footer from "./component/ProductList";
// import ProductList from "./component/ProductList";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
function App() {
  return (
    <div className="container">
        <Header />
        {/* <Infor image= "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
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
        /> */}
        <Cart image= "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
        productName= "Samsung Galaxy Note 20 Ultra 5G"
        newPrice= "20490000"
        />
        <Footer /> 
    </div>
  );
}

export default App;
