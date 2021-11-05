import React, { useState, Fragment } from 'react';
// import { useNavigate } from 'react-router-dom'
import './ManagerItem.css'
import productData from '../Data/Data'
import { useHistory } from "react-router-dom";

export default function ManagerItem() {
  
  const history = useHistory();

  const [index, setIndex] = useState(8)
  
  const [data, setData] = useState(productData)
  
  const [increase, setIncrease] = useState(false)
  
  const [disabledButton, setDisabledButton] = useState(false)
  // let navigate = useNavigate();
  function ProductItem(props) {
    return (
      <div class="col-md-3 col-lg col-xl my-5">
        <div class="card shadow"
          style={{
            width: '100%',
            border: '0.5px solid #C4C4C4', borderRadius: '12px', cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.1)',
            }
          }}
            onClick={() => history.push('/editItem',props.product)}
          >
          <img src={props.product.image} class="card-img-top " alt="..." style={{ width: '90%', borderRadius: '10%' }} />
          <div class="card-body">
            <h5 class="card-title" style={{minHeight:'48px'}}>{props.product.productName}</h5>
            <div class='row' style={{ paddingRight: '16px', paddingLeft: '4px' }}>
              <div class='col-md col-lg col-xl float-start m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4', width: '100%' }}>
                {props.product.specifications.screen} inches
              </div>
              {/* <div class='col-md m-2 rounded' style={{ backgroundColor: '#C4C4C4' }}>
                {props.product.specifications.ram}GB
              </div> */}
              <div class='col-md col-lg col-xl m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4' }}>
                {props.product.specifications.rom}GB
              </div>
            </div>
            <p class="text-danger h1">{props.product.newPrice}</p>
            <p class="text-muted h3">{props.product.oldPrice}</p>
          </div>
        </div>
      </div>
    )
  }
  function AddItem(){
    return(
      <button type="button" class="btn btn-outline-success" onClick={()=>{
        window.location.href='/addItem'
      }}>
        Thêm sản phẩm
      </button>
    )
  }
  // này là component 
  function Sort() {
    return <button type="button" class="btn btn-success" onClick={() => handleSort()}>Sắp xếp</button>
  }


  function handleSort() {
    setData(productData.slice().sort((a, b) => {
      if (!increase) return a.newPrice - b.newPrice
      else return -(a.newPrice - b.newPrice)
    }))

    setIncrease(!increase)
  }

  function ButtonMore() {
    return (
      <div class='row mb-5 d-flex justify-content-center'>
        <button type="button" class="btn btn-secondary w-25"
          onClick={handleClickMore} disabled={disabledButton}>
          <span> Xem thêm</span>
        </button>
      </div>
    )
  }

  function BtnMode(){
    
    return(
        <div class="dropdown ">
        <button type="button" class="btn dropdown-toggle btn-outline-primary" data-bs-toggle="dropdown">
        Quản lý
        </button>
        <ul class="dropdown-menu ">
          <li><a class="dropdown-item" href="Admin">Quản lý</a></li>
          <li><hr class="dropdown-divider"></hr></li>
          <li><a class="dropdown-item active" href="managerItem">Quản lý sản phẩm</a></li>
          <li><a class="dropdown-item" href="OrderAdmin">Quản lý đơn hàng</a></li>
        </ul>
      </div>
      )
  }

  function handleClickMore() {

    setIndex(n => n + 8)

    if (index + 8 >= productData.length) {
      // setIndex(index - 8)
      setDisabledButton(!disabledButton)
    }
    // else setIndex(index + 8)
    // console.log('Index : ' + index + ' and Len :' + productData.length)
    // console.log(nameBtnMore)
  }



  function RenderProduct() {
    // ReactDOM.render(<ProductItem product={productData[0]} />,listProduct)
    return <Fragment>{data.slice(0, index).map((product) => {
      return (
        <ProductItem product={product} />
      )
    })}
      <ButtonMore />
      
    </Fragment>
  }


  return (
    <div class='container-fluid'>
      <div class="d-flex justify-content-end container mt-3">
          <Sort/>
          <AddItem/>
          <BtnMode/>
        
      </div>
      <div class='row mx-5' id='product-list'>
        <RenderProduct />
      </div>
    </div>
  );
}



