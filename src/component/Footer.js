import React from "react"
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-sm-3">
                            <h3>Về “tên doanh nghiệp”</h3>
                            <p> Giới thiệu chung Tuyển dụng</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Liên hệ</h3>
                            <p><i className="fas fa-phone-alt"></i> 0123456789</p>
                            <p><i className="fas fa-mail-bulk"></i> abcxyz@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i> 268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí
                                Minh</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Hỗ trợ khách hàng</h3>
                            <p>Mua hàng từ xa</p>
                            <p>Quy định đổi trả</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>Dịch vụ cung cấp</h3>
                            <p>Dịch vụ sửa chữa</p>
                            <p>Nâng cấp phần cứng</p>
                            <p>Bảo hành sản phẩm</p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer2">
                &copy Copyright 2021 ABCXYZ
            </footer>
        </>
    );
}