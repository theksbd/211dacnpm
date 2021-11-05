import React, { useState, Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'

function Cart(props){
    return(
        <div className="container" >
            <div class="col-md-12 col-sm-12 d-flex">
                <div class="col-md-6 col-sm-6 ">
                    <span class="glyphicon glyphicon-menu-left" aria-hidden="true" style={{marginLeft: 'auto', width:'auto', color:'red'}}></span>
                    <a href="#" class="link-danger">Tiếp tục tìm kiếm sản phẩm</a>
                </div>    
                <div class="col-md-6 col-sm-6 ">
                    <p style={{textAlign:'right',fontSize:'1.5em'}}>Giỏ hàng của bạn</p>
                </div>
            </div>
            <div class="col-md-11 col-sm-11 d-flex" style={{border: '2px solid #C4C4C4', borderRadius: '12px'}}>
                <div class="col-md-4 col-sm-4">
                    <img style={{marginLeft:"2px",display: 'block',maxWidth: '100%',height: 'auto'}}
                    //src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-15.png"
                    src={props.image}
                    alt="new"
                    class="card-img-top "
                    />
                </div>
                <div class="col-md-8 col-sm-8">
                    <h2 style={{textAlign:'center'}}>{props.productName}</h2>
                    <h3 style={{color:'red'}}>{props.newPrice} Đ</h3>
                    <h3>Khuyến mãi:</h3>
                    <h5>- Tặng mã giảm giá 1,000,000đ khi mua các sản phẩm khác tại cửa hàng</h5>
                    <h5>- Bảo hành 12 tháng</h5>
                    <div style={{float:'right'}} class="btn-group d-flex col-md-5 col-sm-5" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-danger">Xóa khỏi giỏ</button>
                        <button type="button" class="btn btn-outline-secondary">-</button>
                        <input style={{maxWidth: '40px'}} class="form-control" type="text" id="fname" name="fname" value="1" required/>
                        <button type="button" class="btn btn-outline-secondary">+</button>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'30px'}} class="col-md-11 col-sm-11 d-flex">
                <p class="col-md-4 col-sm-4" style={{fontSize:'2em'}}>Nhập mã giảm giá:</p>
                <input  class="form-control col-md-6 col-sm-6" type="text" id="fname" name="fname" required/>
                <button style={{height:'35px', marginLeft:'10px'}} type="button" class="btn btn-danger ">Áp dụng</button>
            </div>
            <div style={{marginTop:'30px'}} class="col-md-11 col-sm-11 d-flex">
                <p class="col-md-9 col-sm-9" style={{fontSize:'2em'}}>Mã giảm giá:</p>
                <p style={{fontSize:'2em'}}>0Đ </p>
            </div>
            <div style={{marginTop:'30px'}} class="col-md-11 col-sm-11 d-flex">
                <p class="col-md-9 col-sm-9" style={{fontSize:'2em'}}>Tổng tiền:</p>
                <p style={{fontSize:'2em', color:'red'}}>{props.newPrice} Đ</p>
            </div>
            <div style={{marginTop:'30px',textAlign:'center'}} class="col-md-11 col-sm-11">
                <p style={{fontSize:'2em',textAlign:'center'}} class="col-md-12 col-sm-12 ">Nhập thông tin đặt mua</p>
                <input type="text" class="form-control col-md-6 col-sm-6" aria-describedby="emailHelp" placeholder="Họ và tên"></input>
                <input style={{marginLeft:'0px'}} type="text" class="form-control col-md-6 col-sm-6" aria-describedby="emailHelp" placeholder="Số điện thoại"></input>
                <input style={{height:'100px',marginTop:'30px'}} type="text" class="form-control col-md-12 col-sm-12" aria-describedby="emailHelp" placeholder="Địa chỉ nhận hàng"></input>
                <input style={{marginTop:'30px'}} type="email" class="form-control col-md-12 col-sm-12" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <select style={{marginTop:'30px'}} id="inputState" class="form-control col-md-12 col-sm-12">
                    <option selected>Hình thức thanh toán</option>
                    <option>Thanh toán khi nhận hàng</option>
                    <option>Chuyển khoản</option>
                </select>
            </div>
            <div class="col-md-12 col-sm-12" style={{textAlign:"center"}}>
                    <button style={{marginTop:"30px", borderRadius:"15px"}} type="button" class="btn btn-danger"><h1>Xác nhận đặt hàng</h1></button>
            </div>
        </div>
    )
}
export default Cart;