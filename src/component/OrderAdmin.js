import { React, useState } from 'react'
import Calendar from 'react-calendar'
import { Bar } from 'react-chartjs-2'
import 'react-calendar/dist/Calendar.css';
import { Row, Col, Form } from 'react-bootstrap'

function OrderAdmin() {

    const dataOrder = {
        totalOrder: GetRandomNumber(1, 200),
        cancelOrder: GetRandomNumber(0, 18),
        totalProduct: 133,
        importProduct: GetRandomNumber(0,10),
        profit: GetRandomNumber(10000000, 500000000),
        deposit: GetRandomNumber(10000000, 80000000),
        totalComplaint: GetRandomNumber(0, 10),
        performance: GetRandomNumber(30, 100)
    };

    const [date, setDate] = useState(new Date());
    let yesterday = new Date();
    let farday = new Date();

    const [showCalendar, setShowCalendar] = useState(true);

    function GetRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function numToString(num) {
    //     let n = num.toSring();
    //     for (let i = n.length - 1, count = 0; i >= 0; i--, count++) {
    //         if (count % 3 === 0) {
    //             n = n.slice(0, i) + "," + n.slice(i);
    //         }
    //     }
    //     return n;
    // }

    function onChange(date) {
        setDate(date);
        // <HandleChange date={date} />;
    };

    function GetPreviousDate(date) {
        let yesterday = new Date();
        yesterday.setFullYear(date.getFullYear());
        yesterday.setMonth(date.getMonth());
        yesterday.setDate(date.getDate());

        if (date.getDate() == 1 && date.getMonth() == 1) {
            yesterday.setFullYear(date.getFullYear() - 1);
            yesterday.setMonth(date.getMonth() - 1);
            yesterday.setDate(date.getDate() - 1);
        }
        // else if (date.getMonth() == 1) {
        //     yesterday.setDate(date.getDate() - 1);
        // }
        else
            yesterday.setDate(date.getDate() - 1);
        return yesterday;
    }


    yesterday = GetPreviousDate(date);
    farday = GetPreviousDate(yesterday);

    function GetDate(date) {
        let dayOfWeek = date.getDay();
        let day = date.getDate();
        let month = date.getMonth();
        month += 1;
        let year = date.getFullYear();

        return [dayOfWeek, day, month, year];
    }

    function getDayOfWeek(dayOfWeek) {
        switch (dayOfWeek) {
            case 0:
                dayOfWeek = "Chủ nhật";
                break;
            case 1:
                dayOfWeek = "Thứ 2";
                break;
            case 2:
                dayOfWeek = "Thứ 3";
                break;
            case 3:
                dayOfWeek = "Thứ 4";
                break;
            case 4:
                dayOfWeek = "Thứ 5";
                break;
            case 5:
                dayOfWeek = "Thứ 6";
                break;
            default:
                dayOfWeek = "Thứ 7";
                break;
        }
        return dayOfWeek;
    }

    let dayOfWeek, day, month, year;

    let dateInfo = [dayOfWeek, day, month, year];
    dateInfo = GetDate(date);
    dateInfo[0] = getDayOfWeek(dateInfo[0]);

    let yesterdayInfo = [dayOfWeek, day, month, year];
    yesterdayInfo = GetDate(yesterday);
    yesterdayInfo[0] = getDayOfWeek(yesterdayInfo[0]);

    let fardayInfo = [dayOfWeek, day, month, year];
    fardayInfo = GetDate(farday);
    fardayInfo[0] = getDayOfWeek(fardayInfo[0]);

    function GetStringDate(date) {
        return date[0] + " - " + date[1] + "/" + date[2] + "/" + date[3];
    }

    return (
        <div className="my-5 container" id='product-list'>
            <h3 className="mt-3">Thời gian</h3>
            {/* <select className="form-control-lg mb-1">
                {displayDate(dateInfo)};
                {displayDate(yesterdayInfo)};
                {displayDate(fardayInfo)};
            </select> */}
            <div className="mb-3">
                <button className="btn-primary col-sm-1" onClick={() => setShowCalendar(true)}>
                    <i class="far fa-clock"></i> Hiện
                </button>
                <button className="btn-warning col-sm-1" onClick={() => setShowCalendar(false)}>
                    <i class="fas fa-stopwatch"></i> Ẩn
                </button>
            </div>
            {showCalendar ? <div className="mb-3">  <Calendar onChange={onChange} value={date} /> </div> : null}

            {console.log(date)}

            <div className="row mb-3 mt-5">
                <Form>
                    <Row className="mb-5">
                        <Col>
                            <div className="p-lg-3 font-weight-bold" style={{
                                backgroundColor: "#C4C4C4", borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-4 ms-2">
                                        <i class="fas fa-file-invoice "></i> Tổng số hóa đơn
                                    </div>
                                    <div className="col-7 text-right">
                                        {dataOrder.totalOrder}
                                    </div>
                                </div>
                            </div>
                            <div className="p-lg-3 font-weight-bold" style={{
                                borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-4 ms-2">
                                        <i class="fas fa-trash-alt"></i> Số hóa đơn hủy
                                    </div>
                                    <div className="col-7 text-right">
                                        {dataOrder.cancelOrder}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-lg-3 font-weight-bold" style={{
                                backgroundColor: "#C4C4C4", borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-4 ms-2">
                                        <i class="fas fa-mobile"></i> Số lượng mặt hàng
                                    </div>
                                    <div className="col-7 text-right">
                                        {dataOrder.totalProduct}
                                    </div>
                                </div>
                            </div>
                            <div className="ownborder p-lg-3 font-weight-bold" style={{
                                borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-4 ms-2">
                                        <i class="fas fa-file-import"></i> Số lượng hàng nhập
                                    </div>
                                    <div className="col-7 text-right">
                                        {dataOrder.importProduct}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <div className="p-lg-3 font-weight-bold" style={{
                                backgroundColor: "#C4C4C4", borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-3 ms-2">
                                        <i class="fas fa-money-bill-wave-alt"></i> Doanh thu
                                    </div>
                                    <div className="col-8 text-right">
                                        {dataOrder.profit}
                                    </div>
                                </div>
                            </div>
                            <div className="p-lg-3 font-weight-bold" style={{
                                borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-3 ms-2">
                                        <i class="fas fa-cart-arrow-down"></i> Đặt cọc
                                    </div>
                                    <div className="col-8 text-right">
                                        {dataOrder.deposit}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-lg-3 font-weight-bold" style={{
                                backgroundColor: "#C4C4C4", borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-4 ms-2">
                                        <i class="fas fa-user-friends"></i> Số khách than phiền
                                    </div>
                                    <div className="col-7 text-right">
                                        {dataOrder.totalComplaint}
                                    </div>
                                </div>
                            </div>
                            <div className="p-lg-3 font-weight-bold" style={{
                                borderStyle: "solid",
                                borderWidth: "2px"
                            }}>
                                <div className="row">
                                    <div className="col-3 ms-2">
                                        <i class="fab fa-product-hunt"></i> Hiệu suất
                                    </div>
                                    <div className="col-8 text-right">
                                        {dataOrder.performance}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="row">

            </div>


            <Bar
                data={{
                    labels: [GetStringDate(fardayInfo), GetStringDate(yesterdayInfo), GetStringDate(dateInfo)],
                    datasets: [
                        {
                            label: 'Số đơn hàng',
                            data: [GetRandomNumber(1, 100), GetRandomNumber(1, 100), GetRandomNumber(1, 100)],
                            backgroundColor: '#f73600',
                            borderColor: 'black',
                            borderWidth: 3,
                            barPercentage: 0.5,
                            hoverBackgroundColor: '#f7a436',
                            hoverBorderColor: '#8f8d8c',
                        }
                    ]
                }}

                width={100}
                height={50}
                options={{
                    // maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                // This more specific font property overrides the global property
                                font: {
                                    size: 18
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Số đơn hàng trong ngày',
                            padding: {
                                top: 10,
                                bottom: 30
                            },
                            font: {
                                size: 35
                            }
                        }
                    }
                }}
            />
        </div >
    );
}

export default OrderAdmin;