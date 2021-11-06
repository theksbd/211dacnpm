import React, { useState, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart(props) {
    const productData =
    {
        "productName": "Samsung Galaxy Note 20 Ultra 5G",
        "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
        "specifications": {
            "screen": 6.9,
            "ram": 12,
            "rom1": "128 GB",
            "rom2": "256 GB",
            "rom3": "512 GB",
            "rom4": "1 TB"
        },
        "newPrice": 20490000,
        "oldPrice": 32990000,
        "chip": "Exynos 990",
        "pin": "4500 mAh",
        "OS": "Android 10"
    }
    const discountcode ={
        "discount1":1000000,
        "discount2":2000000,
    }
    const [discount, setDiscount] = useState('')
    const [check, setCheck] = useState(0)
    const [counter, setCounter] = useState(1)
    const HandleDiscount = () => {
        setCheck(0);
        if (discountcode.discount1 == discount || discountcode.discount2 == discount){
            setCheck(discount);
            return 
        }
        else {
            setDiscount(0);
            return
        }
    }
    const HandleIncrese = () => {
        setCounter(counter + 1)
    }
    const HandleDecrese = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    function handleSubmit() {
        toast.success('Đặt hàng thành công', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="container" >
            <ToastContainer />
            <div class="col-md-12 col-sm-12 d-flex mt-3">
                <div class="col-md-6 col-sm-6 ">
                    {/* <span class="glyphicon glyphicon-menu-left" aria-hidden="true" style={{ marginLeft: 'auto', width: 'auto', color: 'red' }}></span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" style={{ marginLeft: 'auto', width: 'auto', color: 'red' }}>
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                    <a href="/" class="link-danger">Tiếp tục tìm kiếm sản phẩm</a>
                </div>
                <div class="col-md-6 col-sm-6 ">
                    <p style={{ textAlign: 'right', fontSize: '1.5em' }}>Giỏ hàng của bạn</p>
                </div>
            </div>
            <div class="col-md-12 col-sm-12  row" style={{ border: '2px solid #C4C4C4', borderRadius: '12px' }}>
                <div class="col-md-4 col-sm-4">
                    <img style={{ marginLeft: "2px", display: 'block', maxWidth: '100%', height: 'auto' }}
                        //src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-15.png"
                        src={productData.image}
                        alt="new"
                        class="card-img-top "
                    />
                </div>
                <div class="col-md-8 col-sm-8">
                    <h2 style={{ textAlign: 'center' }}>{productData.productName}</h2>
                    <h3 style={{ color: 'red' }}>{productData.newPrice} Đ</h3>
                    <h3>Khuyến mãi:</h3>
                    <h5>- Tặng mã giảm giá 1,000,000đ khi mua các sản phẩm khác tại cửa hàng</h5>
                    <h5>- Bảo hành 12 tháng</h5>
                    <div class="btn-group d-flex col-md-12 col-sm-12 mb-3" role="group" aria-label="Basic example" style={{maxWidth:'300px'}}>
                        <button style={{height:'40px'}} type="button" class="btn btn-outline-danger">Xóa khỏi giỏ</button>
                        <button style={{height:'40px', marginLeft:'-36px'}}type="button" class="btn btn-outline-secondary" onClick={HandleDecrese}>-</button>
                        <input style={{height:'40px', width: '40px', marginLeft:'-36px'}} class="form-control" type="text" id="fname" name="fname" value={counter} required />
                        <button style={{height:'40px'}}type="button" class="btn btn-outline-secondary" onClick={HandleIncrese}>+</button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '30px'}} class="row-col-md-12 row-col-sm-12 d-flex ">
                <p class="col-md-4 col-sm-4 " style={{ fontSize: '2em' }}>Nhập mã giảm giá:</p>
                <input style={{}}class="form-control col-md-5 col-sm-5" type="text" id="fname" name="fname" required onChange={(event) => setDiscount(event.target.value)}/>
                {/* <button style={{ height: '35px', marginLeft: '10px' }} type="button" class="btn btn-danger" onClick={HandleDiscount} >Áp dụng</button> */}
                <button style={{ height: '35px', marginLeft: '10px'}} type="button" class="btn btn-danger col-md-2 col-sm-3" onClick={HandleDiscount} >Áp dụng</button>
            </div>
            <div style={{ marginTop: '30px' }} class="row-col-md-12 row-col-sm-12 d-flex">
                <p class="col-md-9 col-sm-9" style={{ fontSize: '2em' }}>Mã giảm giá:</p>
                <p style={{ fontSize: '2em' }}>{
                    check?
                        <p> {check}Đ </p>
                    :   <p> 0Đ </p>
                }
                
                 </p>
            </div>
            <div style={{ marginTop: '30px' }} class="row-col-md-12 row-col-sm-12 d-flex">
                <p class="col-md-9 col-sm-9" style={{ fontSize: '2em' }}>Tổng tiền:</p>
                <p style={{ fontSize: '2em', color: 'red' }}>{productData.newPrice *counter -check}Đ</p>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }} class="col-md-11 col-sm-11">
                <p style={{ fontSize: '2em', textAlign: 'center' }} class="col-md-12 col-sm-12 ">Nhập thông tin đặt mua</p>
                <div className="d-flex" style={{ maxWidth : "1158px"}}>
                    <input type="text" class="form-control col-md-6 col-sm-6 mb-2" aria-describedby="emailHelp" placeholder="Họ và tên"></input>
                    <input style={{ marginLeft: '8px' }} type="text" class="form-control col-md-6 col-sm-6 mb-2" aria-describedby="emailHelp" placeholder="Số điện thoại"></input>
                </div>
                <div className="d-flex">
                    <input type="text" class="form-control col-md-6 col-sm-6 mb-2" aria-describedby="emailHelp" placeholder="Địa chỉ nhận hàng"></input>
                    <input style={{ marginLeft: '8px' }} type="email" class="form-control col-md-6 col-sm-6 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <select id="inputState" class="form-control col-md-6 col-sm-6" style={{margin : "auto"}}>
                    <option selected>Hình thức thanh toán</option>
                    <option>Thanh toán khi nhận hàng</option>
                    <option>Chuyển khoản</option>
                </select>
            </div>
            <div class="col-md-12 col-sm-12 mb-5" style={{ textAlign: "center" }}>
                <button style={{ marginTop: "30px", borderRadius: "15px" }} type="button" class="btn btn-danger" onClick={handleSubmit}><h1>Xác nhận đặt hàng</h1></button>
            </div>
        </div>
    )
}


export default Cart;