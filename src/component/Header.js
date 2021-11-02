import React from "react"
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    return (
        <div className="body">
            <nav className="navbar navbar-expand-md navbar-light bg-primary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        Logo
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="form-inline search-bar" action="/action_page.php">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
                        </div>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className=" nav-item">
                                <a className="nav-link active" href="#0"> <i className="fas fa-shopping-cart"></i> Giỏ hàng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <p className="path"> Trang chủ <i class="fas fa-chevron-right"></i> Tra cứu đơn hàng</p>
            <nav className="navbar navbar-expand-md navbar-light bg-primary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        <i className="fas fa-bars"></i> Danh mục sản phẩm <i className="fas fa-chevron-down"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#0"> <i className="fas fa-truck"></i> Tra cứu đơn hàng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#0">Giới thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#0">Tuyển dụng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#0"> <i className="fas fa-phone-alt"></i> Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}