
import { useLocation } from "react-router-dom";
import RenderEditItem from "../RenderEditItem"
import {useEffect,useState} from "react"
import axios from "axios";
function EditItem(){
	const location = useLocation();
	const id =parseInt(location.state);
	const [product,setProduct] = useState({})
	const [check,setCheck] = useState(false) //chua co data
	useEffect(()=>{
		async function fetchData() {
		try {
			const res = await axios.get('http://localhost:8080/product/detail'
			,
			{ 
			params:{
				id: id
			}
			}
			)
			setProduct(res.data)
			setCheck(true);
			console.log(res.data)
		  } catch (error) {
			console.log(error.message)
		  }
		}
		fetchData()
	},[])
	let productData;
	if(check){
		productData={
			id: product.product.Id,
			textName: product.product.Product_Name,
			textType: product.product.Product_Type,
			textColor: product.product.Color,
			txtBattery: product.product.battery,
			txtOs: product.product.Os, 
			txtDisplaySize: product.product.DisplaySize, 
			txtChip: product.product.chip, 
			txtInStock: product.product.InStock,
			textDiscount: product.product.Discount,

			txtMemory: product.memory[0].Ram_Capacity,
			txtRom: product.memory.map((memory,index)=>{
				let string = memory.Rom_Capacity + " - " + memory.Price +", "
				return string
			}).reduce((total,current)=>{
				return total + current;
			}),

			image: product.image[0].Url,
			image1: product.image[1].Url,
			image2: product.image[2].Url,
			image3: product.image[3].Url,
			image4: product.image[0].Url,
			
			Id_Discount : null,
			Price : null
		  };
		  if(product.discountCode){
			  productData.Id_Discount = product.discountCode.Id_Discount;
			  productData.Price = product.discountCode.Price
		  }
		  console.log(productData)
	}

	function _render() {
			if(productData){
				return(
					<RenderEditItem productData={productData}/>
				)
			}
	}
	return (
		<_render/>
	)
}
export default EditItem;