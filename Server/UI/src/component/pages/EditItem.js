// import Header from '../Header'
// import Footer from '../Footer'
// import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import RenderEditItem from "../RenderEditItem"

function EditItem(){
	const location = useLocation();
   	const productData = location.state;
	console.log(productData)
	return (
		<RenderEditItem productData={productData}/>
	)
}
export default EditItem;