import React, { useState, Fragment } from 'react';
// import { useNavigate } from 'react-router-dom'
import './ManagerItem.css'
const productData = [
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490005,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490001,
    "oldPrice": 32990000
  },
  {
    "productName": "ASUS ROG Phone 5 Chính Hãng",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/s/asus-rog-phone-5_0002_gsmarena_001.jpg",
    "specifications": {
      "screen": 6.78,
      "ram": 16,
      "rom": 256
    },
    "newPrice": 18990000,
    "oldPrice": 22990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490007,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490014,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490045,
    "oldPrice": 32990000
  },
  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },

  {
    "productName": "Samsung Galaxy Note 20 Ultra 5G",
    "image": "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/300x/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    "specifications": {
      "screen": 6.9,
      "ram": 12,
      "rom": 256
    },
    "newPrice": 20490000,
    "oldPrice": 32990000
  },


]





export default function ManagerItem() {
  
  const [index, setIndex] = useState(8)
  
  const [data, setData] = useState(productData)
  
  const [increase, setIncrease] = useState(false)
  
  const [disabledButton, setDisabledButton] = useState(false)
  let navigate = useNavigate();
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
          onClick={()=>{
            window.location.href('/editItem')
          }}
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
        navigate('/addItem')
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
          <li><a class="dropdown-item" href="managerItem">Quản lý sản phẩm</a></li>
          <li><a class="dropdown-item" href="donhang">Quản lý đơn hàng</a></li>
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



