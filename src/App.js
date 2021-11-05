import ProductList from "./component/ProductList";
import Login from "./component/Login"
import EditItem from "./pages/EditItem";
import AddItem from "./pages/AddItem";
import Admin from "./pages/Admin";
import ManagerItem from "./pages/ManagerItem";
import React, {Component}from 'react'
import axios from 'axios';
// import EditItem from "./component/test";
import ImageUploadPreviewComponent from './component/ImageUploadPreviewComponent'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
export default class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={EditItem} />
        <Route path="editItem/*" element={EditItem } />
        <Route path="addItem/*" element={AddItem } />
        <Route path="admin/*" element={Admin } />
        <Route path="managerItem/*" element={ManagerItem } />
      </Switch>
    </BrowserRouter>
  );
  }
}

