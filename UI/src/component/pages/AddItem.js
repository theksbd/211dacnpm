import './EditItem.css'
import React, {Component} from 'react'
import {Form, Button } from 'react-bootstrap'
class AddItem extends Component{
	constructor(props) {
		super(props);
		this.index=""
		this.url=""
		this.state = {
		  validated: false,
		  textName: "",
		  textType: "",
		  textCost: "",
		  textColor: "",
		  txtBattery:"",
		  txtMemory:"",
		  txtRom: "",
		  txtOs:"", 
		  txtDisplaySize:"", 
		  txtChip:"", 
		  txtInStock:"",
		  textDiscount: "",
		  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.imageHandler = this.imageHandler.bind(this);
		this.indexImage = this.indexImage.bind(this);
	      }
		  
		handleSubmit = (event) => {
		      const form = event.currentTarget;
		      if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		      }  
		      this.setState({validated: true});
		};
	    
	      	handleInputChange(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
			[name]: value
			});
	     	 };
		imageHandler = (e) => {
			var indexImage =this.index;
			let reader = new FileReader();
			let file = e.target.files[0];
			reader.onloadend = () => {
			this.setState({
				[indexImage]: reader.result
			});
			}
			reader.readAsDataURL(file)
		  };
		indexImage=(e)=>{
			document.getElementById("chosefile").click()
		}
		On_click=(e)=>{
			const target = e.target;
			const name = target.name;
			this.index= name;
		  document.getElementById("openmodal").click()
	  	}
	render() {

	return(
		<div class='container-fluid' id='product-list'>
		{/* <Header/> */}
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
		<div class ='row' style={{marginTop:'5px'}}>
		<h4 class="text-center">Thông tin sản phâm</h4>
			<div class="col-md-7 col-sm-12">
				<Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
				<Form.Label>Tên sản phẩm</Form.Label>
				<Form.Control type="text" placeholder="Tên sản phẩm" style={{borderRadius:'9px'}} name="textName" value={this.state.textName} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Please provide a valid city.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Loại</Form.Label>
				<Form.Control type="text" placeholder="Nhập hãng sản phẩm" style={{borderRadius:'9px'}} name="textType" value={this.state.textType} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Giá</Form.Label>
				<Form.Control type="text" placeholder="Nhập giá của sản phẩm" style={{borderRadius:'9px'}}required name="textCost" value={this.state.textCost} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
				Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Màu</Form.Label>
				<Form.Control type="text" placeholder="Nhập màu 1, màu 2,.." style={{borderRadius:'9px'}} required name="textColor" value={this.state.textColor} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nhập dung lượng pin</Form.Label>
				<Form.Control type="text" placeholder="Nhập dung lượng pin" style={{borderRadius:'9px'}}  name="txtBattery" value={this.state.txtBattery} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Dung lượng bộ nhớ</Form.Label>
				<Form.Control type="text" placeholder="Nhập dung lượng bộ nhớ" style={{borderRadius:'9px'}} required name="txtRom" value={this.state.txtRom} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nhập dung lượng ram</Form.Label>
				<Form.Control type="text" placeholder="Nhập dung lượng ram" style={{borderRadius:'9px'}}  name="txtMemory" value={this.state.txtMemory} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Hệ điều hành</Form.Label>
				<Form.Control type="text" placeholder="Nhập hệ điều hành" style={{borderRadius:'9px'}} required name="txtOs" value={this.state.txtOs} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Kích thước màn hình</Form.Label>
				<Form.Control type="text" placeholder="Nhập kích thước màn hình" style={{borderRadius:'9px'}} required name="txtDisplaySize" value={this.state.txtDisplaySize} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Chip</Form.Label>
				<Form.Control type="text" placeholder="Nhập chip" style={{borderRadius:'9px'}} required name="txtChip" value={this.state.txtChip} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Số lượng</Form.Label>
				<Form.Control type="text" placeholder="Nhập số lượng" style={{borderRadius:'9px'}} required name="txtInStock" value={this.state.txtInStock} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Thông tin khuyễn mãi</Form.Label>
				<Form.Control type="text" placeholder="Nhập thông tin khuyễn mãi" style={{borderRadius:'9px'}} name="textDiscount" value={this.state.textDiscount} onChange={this.handleInputChange} />
				{/* <Form.Control.Feedback type="invalid">
					Phần này không được để trống.
				</Form.Control.Feedback> */}
				</Form.Group>
				
		
			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'25px'}}>
				<div class ='row'>
				<div class="col-md-9 col-sm-9 " style={{margin:'auto', boder:"1px groove #F57E7E"}}>
				<input type="file" style={{display:'none'}} accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
				onChange={this.imageHandler} id="chosefile"
          			ref={fileInput => this.fileInput=fileInput}/>
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" id="openmodal" style={{display:'none'}}>Open modal</button>
				<img class="img-fluid" src={this.state.image} name ="image" onClick={this.On_click}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 " style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 " style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image3} name ="image3" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image4} name ="image4" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-5">
		<Button type="submit" variant="success">Thêm sản phẩm</Button>
		<button type="button" class="btn btn-success"  onClick={()=>{window.location.href = "/managerItem"}}>Hủy</button>
		</div>
		</Form>
		{/* <!-- The Modal --> */}
		<div class="modal fade" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">

			{/* <!-- Modal Header --> */}
			<div class="modal-header">
				<h4 class="modal-title">Nhập đường dẫn hình ảnh</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>

			{/* <!-- Modal body --> */}
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="Đường dẫn hình ảnh" name="url" onChange={(e)=>{this.url= e.target.value}}/>
			</div>

			{/* <!-- Modal footer --> */}
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" onClick={this.indexImage} data-bs-dismiss="modal">Chọn file</button>
				<button type="button" class="btn btn-success" onClick={(e)=>{
					const indexImage =this.index;
						if(this.url!=''){
							this.setState({
								[indexImage]: this.url
							});
						}
					}} 
				data-bs-dismiss="modal">OK</button>
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
			</div>

			</div>
		</div>
		</div>
		</div>
		</div>
		{/* <Footer/> */}
		</div>
	);
	}
}

export default AddItem;