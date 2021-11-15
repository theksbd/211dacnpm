import React, { useState, Fragment } from 'react';
import ProductItem from './ProductItem'
import productData from '../../Data/Data'

const axios = require('axios')

let data = []

axios.get('http://localhost:8080/products/comprehension')
  .then(response => {
    data = response.data
    console.log(data)
  })
  .catch(error => console.log(error))




export default function ProductList() {



  const [index, setIndex] = useState(8)

  const [data, setData] = useState(productData)

  const [increase, setIncrease] = useState(false)

  const [disabledButton, setDisabledButton] = useState(false)

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
      <div class='row mx-5' id='product-list'>
        <div class='row' style={{ marginTop: '0rem' }}>
          <div class='col-md-6 mt-5'>
            <Sort />
          </div>
        </div>
        <RenderProduct />
      </div>
    </div>
  );
}



