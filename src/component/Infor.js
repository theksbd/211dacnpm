import React, { useState, Fragment, Alert } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comment from './Comment';
import { useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";


function Infor(props) {
    const location = useLocation();
    // const history = useHistory();

    

    const productData = location.state

    const [show, setShow] = useState(true)
    const HandleShow = () => {

        setShow(!show);
    }
    function handleSubmit() {
        toast.success('Sản phẩm đã thêm vào giỏ hàng', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // history.push('/Cart',productData.product)
    }
    return (

        <div className="container mt-5" >
            <ToastContainer />
            <div class="d-flex" >
                <div class="col-md-5 col-sm-12 " >
                    <div class="d-flex" style={{ height: 'auto', width: 'auto' }}>
                        <div style={{ display: 'block', marginTop: 'auto', marginBottom: 'auto' }}>
                            <button type="button" class="btn btn-outline-secondary" aria-label="Left Align" style={{ height: '64px', marginLeft: 'auto', borderColor: 'white' }}>
                                {/* <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </button>
                        </div>
                        <div  >
                            <img style={{ marginLeft: "2px", display: 'block', maxWidth: '100%', height: 'auto', backgroundColor: 'blue' }}
                                //src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-15.png"
                                src={productData.image}
                                alt="new"
                                class="card-img-top "
                            />
                        </div>
                        <div style={{ display: 'block', marginTop: 'auto', marginBottom: 'auto' }}>
                            <button type="button" class="btn btn-outline-secondary" aria-label="Left Align" style={{ height: '64px', marginLeft: 'auto', width: 'auto', borderColor: 'white' }}>
                                {/* <span class="glyphicon glyphicon-menu-right" aria-hidden="true" style={{ marginLeft: 'auto', width: 'auto' }}></span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #C4C4C4', borderRadius: '12px', textAlign: 'center' }}>
                        <h3>Thông tin chi tiết sản phẩm</h3>
                        <table class="table table-striped">
                            {/* <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead> */}
                            <tbody>
                                <tr>
                                    <th scope="row">Kích thước màn hình</th>
                                    <td>{productData.specifications.screen} inches</td>
                                </tr>
                                <tr>
                                    <th scope="row">Chipset</th>
                                    <td>{productData.chip}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Dung lượng RAM</th>
                                    <td>{productData.specifications.ram} GB</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bộ nhớ trong</th>
                                    <td>{productData.specifications.rom1} GB</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pin</th>
                                    <td>{productData.pin}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hệ điều hành</th>
                                    <td>{productData.OS}</td>
                                </tr>
                            </tbody>
                            {
                                show ?
                                    <tbody>
                                        <tr>
                                            <th scope="row">Kích thước màn hình</th>
                                            <td>{productData.specifications.screen} inches</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Chipset</th>
                                            <td>{productData.chip}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dung lượng RAM</th>
                                            <td>{productData.specifications.ram} GB</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bộ nhớ trong</th>
                                            <td>{productData.specifications.rom1} GB</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Pin</th>
                                            <td>{productData.pin}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Hệ điều hành</th>
                                            <td>{productData.OS}</td>
                                        </tr>
                                    </tbody>
                                    : null
                            }
                        </table>
                        <button type="button" onClick={HandleShow} class="btn btn-outline-secondary mb-3" >Xem thêm
                            <span class="glyphicon glyphicon-menu-down " aria-hidden="true" style={{ marginLeft: 'auto', width: 'auto' }}></span>
                        </button>
                    </div>
                </div>
                <div class="col-md-7 col-sm-12" >
                    <div style={{ color: "blue", textAlign: "center" }}>
                        <h1>{productData.productName}</h1>
                    </div>
                    <div class="d-flex" >
                        <div class="col-md-5 col-sm-5" style={{ color: "red" }}>
                            <h3>{productData.newPrice} Đ</h3>
                        </div>
                        <div class="col-md-7 col-sm-7" style={{ padding: "auto" }}>
                            <h5 style={{ lineHeight: "20px" }}>(Giá đã bao gồm VAT) Giao hàng tận nơi trên toàn quốc, miễn phí vận chuyển.</h5>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-md-5 col-sm-5">
                            <h3>Số lượng đặt mua:</h3>
                        </div>
                        <div class="col-md-7 col-sm-7" >
                            <h3><input style={{ maxWidth: '50px' }} class="form-control" type="text" id="fname" name="fname" required /></h3>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-md-5 col-sm-5">
                            <h3>Giá niêm yết:</h3>
                        </div>
                        <div class="col-md-7 col-sm-7" >
                            <h4 style={{ lineHeight: "50px" }}>{productData.newPrice} * 1 = {productData.newPrice}</h4>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-md-5 col-sm-5">
                            <h3>Thành tiền:</h3>
                        </div>
                        <div class="col-md-7 col-sm-7" >
                            <h4 style={{ lineHeight: "50px" }}>{productData.newPrice}</h4>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="button" style={{ border: '0.5px solid #C4C4C4', borderRadius: '12px', width: "100px", marginLeft: "20px" }} class="btn btn-outline-secondary">{productData.specifications.rom1} <br /> {productData.newPrice} Đ</button>
                        <button type="button" style={{ border: '0.5px solid #C4C4C4', borderRadius: '12px', width: "100px", marginLeft: "20px" }} class="btn btn-outline-secondary">{productData.specifications.rom2} <br /> {productData.newPrice} Đ</button>
                        <button type="button" style={{ border: '0.5px solid #C4C4C4', borderRadius: '12px', width: "100px", marginLeft: "20px" }} class="btn btn-outline-secondary">{productData.specifications.rom3} <br /> {productData.newPrice} Đ</button>
                        <button type="button" style={{ border: '0.5px solid #C4C4C4', borderRadius: '12px', width: "100px", marginLeft: "20px" }} class="btn btn-outline-secondary">{productData.specifications.rom4} <br /> {productData.newPrice} Đ</button>
                    </div>
                    <div class="col-md-10 col-sm-12" style={{ marginTop: "30px" }}>
                        <table >
                            <thead >
                                <th style={{ borderRadius: '12px 12px 0px 0px', borderColor: "#67B9F4", backgroundColor: "#67B9F4", textAlign: "center" }}><h3 style={{ fontWeight: "bold" }}>Thông tin khuyến mãi</h3></th>
                            </thead>
                            <tbody style={{ border: '0.5px solid #C4C4C4', borderRadius: '0px 0px 12px 12px' }}>
                                <tr>
                                    <h4 style={{ marginLeft: "10px" }}>Tặng mã giảm giá 1,000,000đ khi mua các sản phẩm khác tại cửa hàng</h4>
                                    <h4 style={{ marginLeft: "10px" }}>Bảo hành 12 tháng</h4>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-12 col-sm-12" style={{ textAlign: "center" }}>
                        <button style={{ width: "230px", marginTop: "30px", borderRadius: "30px" }} type="button" class="btn btn-danger" onClick={handleSubmit}><h1>Đặt mua</h1></button>
                    </div>
                </div>

            </div>
            <div class="mt-5 text-center w-50 shadow" style={{ textAlign: "center", margin:"auto" }}>
                    <h3 class="pt-2">Đánh giá và nhận xét</h3>
                    <div class="d-flex justify-content-center">
                        <div class="content text-center">
                            <div class="ratings"> <h3><span class="product-rating">4.6</span><span>/5</span></h3>
                                <div class="stars" style={{ fontSize: "18px", color: "#28a745" }}> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                <div class="rating-text pt-2"> <span><h3>46 ratings & 15 reviews</h3></span> </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="mb-5">
                {/* <button style={{ border: '0.5px solid #C4C4C4', borderRadius: '12px', textAlign: "center", width: "500px" }} type="button" class="btn btn-outline-secondary mb-3"><h2> Xem tất cả đánh giá </h2></button> */}
                <Comment />
            </div>
        </div>

    )
}


export default Infor;