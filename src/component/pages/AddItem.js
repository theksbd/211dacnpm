import Header from '../../component//Header'
import Footer from '../../component/Footer'
import './EditItem.css'
import React, { useState,Component } from 'react'
class AddItem extends Component{
	  state={
	    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	  }
	  imageHandler = (e) => {
	    const reader = new FileReader();
	    reader.onload = () =>{
	      if(reader.readyState === 2){
	        this.setState({profileImg: reader.result})
	      }
	    }
	    reader.readAsDataURL(e.target.files[0])
	  };
	render() {
		const { profileImg} = this.state
	return(
		<div class='container-fluid'>
		<Header/>
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<form>
		<div class ='row' style={{marginTop:'5px'}}>
		<h4 class="text-center">Nhập sản phâm</h4>
			<div class="col-md-7 col-sm-12">
				<label for="itemname" class="form-label" style={{margin:'0 0 2px'}}>Tên sản phẩm</label>
				<input type="text" class="form-control" id="itemname" placeholder="Tên sản phẩm" name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Loại</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập hãng sản phẩm" name="itemname" style={{borderRadius:'9px'}} />
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Giá</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập giá của sản phẩm" name="itemname"style={{borderRadius:'9px'}} />
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Màu</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập màu 1, màu 2,.." name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Dung lượng bộ nhớ </label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập dung lượng bộ nhớ " name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Thông tin ưu đãi</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập các thông tin ưu đãi đặc biệt" name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Mô tả chi tiết</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập các mô tả chi tiết" name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Các tính  năng đặc biệt</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập các tính năng đặc biệt khác của sản phẩm" name="itemname" style={{borderRadius:'9px'}}/>
				<label for="itemname" class="form-label" style={{margin:'10px 0 2px'}}>Các sản phẩm liên quan</label>
				<input type="text" class="form-control" id="itemname" placeholder="Nhập các dòng sản phẩm liên quan" name="itemname" style={{borderRadius:'9px'}}/>
			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'25px'}}>
				<div class ='row'>
				<div class="col-md-10 col-sm-12 " style={{margin:'auto'}}>
				<input type="file" style={{display:'none'}} accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
				onChange={this.imageHandler}
          			ref={fileInput => this.fileInput=fileInput}/>
				<img class="img-fluid" src={profileImg} onClick={()=>this.fileInput.click()}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
				</div>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
				</div>
				<div class="col-md-6 col-sm-6">
				<img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-3">
		<button type="button" class="btn btn-success" name='remove'>Thêm sản phẩm</button>
		<button type="button" class="btn btn-success" name='remove'>Hủy</button>
		</div>
		</form>
		</div>
		</div>
		<Footer/>
		</div>
	);
	}
}

export default AddItem;