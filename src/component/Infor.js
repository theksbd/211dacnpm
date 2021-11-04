import React, { useState, Fragment } from 'react';
import Header from './Header'
import Footer from './Footer'

function Infor(props){
    return(
        <div className="container" >
            {/* <div class="col-md-5 col-sm-5 d-flex" > */}
            <div class="col-md-5 col-sm-12 " >
                <div class="d-flex" style={{height: 'auto',width:'auto'}}>
                    <div style={{display: 'block',marginTop: 'auto',marginBottom: 'auto'}}>
                        <button type="button" class="btn btn-outline-secondary" aria-label="Left Align" style={{height: '80px',marginLeft: 'auto'}}>
                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div  >
                        <img style={{marginLeft:"2px",display: 'block',maxWidth: '100%',height: 'auto', backgroundColor: 'blue'}}
                        //src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/09/15/image-removebg-preview-15.png"
                        src={props.image}
                        alt="new"
                        class="card-img-top "
                        />
                    </div>
                    <div style={{display: 'block',marginTop: 'auto',marginBottom: 'auto'}}> 
                        <button type="button" class="btn btn-outline-secondary" aria-label="Left Align"style={{height: '80px',marginLeft: 'auto', width:'auto'}}>
                            <span class="glyphicon glyphicon-menu-right" aria-hidden="true" style={{marginLeft: 'auto', width:'auto'}}></span>
                        </button>
                    </div>
                </div>
                <div style={{border: '2px solid #C4C4C4', borderRadius: '12px', textAlign:'center'}}>
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
                            <td>{props.screen} inches</td>
                            </tr>
                            <tr>
                            <th scope="row">Chipset</th>
                            <td>{props.chip}</td>
                            </tr>
                            <tr>
                            <th scope="row">Dung lượng RAM</th>
                            <td>{props.ram} GB</td>
                            </tr>
                            <tr>
                            <th scope="row">Bộ nhớ trong</th>
                            <td>{props.rom1} GB</td>
                            </tr>
                            <tr>
                            <th scope="row">Pin</th>
                            <td>{props.pin}</td>
                            </tr>
                            <tr>
                            <th scope="row">Hệ điều hành</th>
                            <td>{props.OS}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" class="btn btn-outline-secondary" >Xem thêm
                        <span class="glyphicon glyphicon-menu-down" aria-hidden="true" style={{marginLeft: 'auto', width:'auto'}}></span>
                    </button>
                </div>
            </div>
            <div class="col-md-7 col-sm-12" >
                <div style={{color:"blue",textAlign:"center"}}>
                    <h1>{props.productName}</h1>
                </div>
                <div class="d-flex" >
                    <div class="col-md-5 col-sm-5" style={{color:"red"}}>
                        <h3>{props.newPrice} Đ</h3>
                    </div>
                    <div class="col-md-7 col-sm-7" style={{padding:"auto"}}>
                        <h5 style={{lineHeight:"20px"}}>(Giá đã bao gồm VAT) Giao hàng tận nơi trên toàn quốc, miễn phí vận chuyển.</h5>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="col-md-5 col-sm-5">
                        <h3>Số lượng đặt mua:</h3>
                    </div>
                    <div class="col-md-7 col-sm-7" >
                        <h3><input style={{maxWidth: '50px'}} class="form-control" type="text" id="fname" name="fname" value="1" required/></h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="col-md-5 col-sm-5">
                        <h3>Giá niêm yết:</h3>
                    </div>
                    <div class="col-md-7 col-sm-7" >
                        <h4 style={{lineHeight:"50px"}}>{props.newPrice} * 1 = {props.newPrice}</h4>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="col-md-5 col-sm-5">
                        <h3>Thành tiền:</h3>
                    </div>
                    <div class="col-md-7 col-sm-7" >
                        <h4 style={{lineHeight:"50px"}}>{props.newPrice}</h4>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                <button type="button" style={{border: '0.5px solid #C4C4C4', borderRadius: '12px',width: "100px", marginLeft:"20px"}} class="btn btn-outline-secondary">{props.rom1} <br/> {props.newPrice} Đ</button>
                <button type="button" style={{border: '0.5px solid #C4C4C4', borderRadius: '12px',width: "100px", marginLeft:"20px"}} class="btn btn-outline-secondary">{props.rom2} <br/> {props.newPrice} Đ</button>
                <button type="button" style={{border: '0.5px solid #C4C4C4', borderRadius: '12px',width: "100px", marginLeft:"20px"}} class="btn btn-outline-secondary">{props.rom3} <br/> {props.newPrice} Đ</button>
                <button type="button" style={{border: '0.5px solid #C4C4C4', borderRadius: '12px',width: "100px", marginLeft:"20px"}} class="btn btn-outline-secondary">{props.rom4} <br/> {props.newPrice} Đ</button>
                </div>
                <div class="col-md-10 col-sm-12" style={{marginTop: "30px"}}>
                    <table >
                    <thead >
                        <th style={{borderRadius: '12px 12px 0px 0px',borderColor:"#67B9F4" ,backgroundColor:"#67B9F4", textAlign:"center"}}><h3 style={{fontWeight:"bold"}}>Thông tin khuyến mãi</h3></th>
                    </thead>
                    <tbody style={{border: '0.5px solid #C4C4C4', borderRadius: '0px 0px 12px 12px'}}>
                        <tr>
                        <h4 style={{marginLeft:"10px"}}>Tặng mã giảm giá 1,000,000đ khi mua các sản phẩm khác tại cửa hàng</h4>
                        <h4 style={{marginLeft:"10px"}}>Bảo hành 12 tháng</h4>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="col-md-12 col-sm-12" style={{textAlign:"center"}}>
                    <button style={{width:"230px",marginTop:"30px", borderRadius:"30px"}} type="button" class="btn btn-danger"><h1>Đặt mua</h1></button>
                </div>
            </div>
            
            {/* </div> */}
            <div style={{textAlign:"center"}}>
                <h3>Đánh giá và nhận xét</h3>
                <div class="d-flex justify-content-center">
                    <div class="content text-center">
                        <div class="ratings"> <h3><span class="product-rating">4.6</span><span>/5</span></h3>
                            <div class="stars" style={{fontSize: "18px",color: "#28a745"}}> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                            <div class="rating-text"> <span><h3>46 ratings & 15 reviews</h3></span> </div>
                        </div>
                    </div>
                </div>
                <div >
                    <button style={{border: '0.5px solid #C4C4C4', borderRadius: '12px',textAlign:"center", width:"500px"}} type="button" class="btn btn-outline-secondary"><h2> Xem tất cả đánh giá </h2>
                        <span class="glyphicon glyphicon-menu-down" aria-hidden="true" style={{marginLeft: 'auto', width:'auto'}}></span>
                    </button>
                </div>
                
            </div>
        </div>
        
    )
}


export default Infor;