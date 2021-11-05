export default function ProductItem(props) {


    return (
        <div className="col-md-3 col-lg col-xl my-5 ">
            <div className="card shadow"
                style={{
                    width: '100%',
                    border: '0.5px solid #C4C4C4', borderRadius: '12px', cursor: 'pointer',
                    maxWidth: '302px'
                }}
                onClick={() => window.location.href= "/Infor"}>
                <img src={props.product.image} className="card-img-top " alt="..." style={{ width: '90%', borderRadius: '10%' }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ minHeight: '48px' }}>{props.product.productName}</h5>
                    <div className='row' style={{ paddingRight: '4px', paddingLeft: '4px' }}>
                        <div className='col-md col-lg col-xl float-start m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4', maxWidth: '104px' }}>
                            {props.product.specifications.screen} inches
                        </div>
                        <div className='col-md col-lg col-xl m-2 rounded' style={{ backgroundColor: '#C4C4C4', maxWidth: '62px' }}>
                            {props.product.specifications.ram}GB
                        </div>
                        <div className='col-md col-lg col-xl m-2 rounded text-center' style={{ backgroundColor: '#C4C4C4', maxWidth: '72px' }}>
                            {props.product.specifications.rom}GB
                        </div>
                    </div>
                    <p className="text-danger h1">{props.product.newPrice}</p>
                    <p className="text-muted h3 text-decoration-line-through">{props.product.oldPrice}</p>
                </div>
            </div>
        </div>
    )
}