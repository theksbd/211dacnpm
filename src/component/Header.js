import productData from '../Data/Data'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import ProductList from './HomePage/ProductList'
import ProductItem from './HomePage/ProductItem'





export default function Header() {

    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(searchKey) {
        let resultSearch;
        let productFound = productData.filter((product) => {
            return product.productName.toLowerCase().includes(searchKey.toLowerCase())
        })
        if (productFound.length == 0) productFound = productData
        resultSearch = (<div class='row ' style={{ marginTop: '10rem' }}>
            {
                productFound.map((product => {
                    return <ProductItem product={product} />
                }))
            } </div>)

        ReactDOM.render(resultSearch, document.getElementById('product-list'))
    }


    return <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand " href="#" style={{ fontFamily: "Roboto", fontSize: "36px" }}>Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-danger" aria-current="page" href="#">Giới Thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Tuyển Dụng</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Liên Hệ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danh Mục Sản Phẩm
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" onClick={() => handleSearch('samsung')} style={{'cursor' : "pointer"}}>Samsung</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSearch('Oppo')} style={{'cursor' : "pointer"}}>Oppo</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSearch('Iphone')} style={{'cursor' : "pointer"}}>Iphone</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSearch('Xiaomi')} style={{'cursor' : "pointer"}}>Xiaomi</a></li>
                            <li><a class="dropdown-item" onClick={() => handleSearch('ASUS')} style={{'cursor' : "pointer"}}>ASUS</a></li>

                        </ul>
                    </li>
                </ul>
                <button class="btn btn-outline-primary me-3" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill mb-1 me-1" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                    Đăng nhập
                </button>
                <a class="nav-link text-primary" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </a>
                <a class="nav-link text-danger" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </a>
                <div class='me-2'>
                    <input class="form-control col-6" type="text" placeholder="Search" aria-label="text" onKeyUp={(even) => {
                        if (even.key === "Enter") {
                            even.preventDefault();
                            document.getElementById('search').click()
                        }
                        else setSearchTerm(even.target.value)
                    }} />
                </div>
                <div>
                    <button class="btn btn-outline-success me-2 " type="submit" onClick={() => handleSearch(searchTerm)} id='search'>Search</button>
                </div>
            </div>
        </div>
    </nav>
}
//         </div >
//     </nav >
// }
