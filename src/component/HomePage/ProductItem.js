export default function ProductItem(props) {


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
          onClick={() => 1}>
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