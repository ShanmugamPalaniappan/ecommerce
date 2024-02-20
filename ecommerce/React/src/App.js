import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Adduser from "./Admin/Adduser";
import Addadmin from "./Admin/Addadmin";
import Viewallusers from "./Admin/Viewallusers";
import Viewalladmins from "./Admin/Viewalladmins";
import Viewallproducts from "./Admin/Viewallproducts";
import Userfeed from "./User/Userfeed";
import Cart from "./User/Cart";
import Orders from "./User/Orders";
import Requests from "./Admin/Requests";
import Purchasehistory from "./Admin/Purchasehistory";
import Addproduct from "./Admin/Addproduct";
import Orderdetails from "./User/Orderdetails";
import Purchasedetails from "./Admin/Purchasedetails";

const App = () => {
  return ( <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route path="/admin/adduser" element={<Adduser/>}/>
    <Route path="/admin/addadmin" element={<Addadmin/>}/>
    <Route path="/admin/addproduct" element={<Addproduct/>}/>
    <Route path="/admin/viewallusers" element={<Viewallusers/>}/>
    <Route path="/admin/viewalladmins" element={<Viewalladmins/>}/>
    <Route path="/admin/viewallproducts" element={<Viewallproducts/>}/>
    <Route path="admin/requests" element={<Requests/>}/>
    <Route path="admin/purchasehistory" element={<Purchasehistory/>}/>
    <Route path="/admin/purchasedetails" element={<Purchasedetails/>}/>
    
    <Route path="/user/home" element={<Userfeed/>}/> 
    <Route path="/user/viewcart" element={<Cart/>}/>
    <Route path="user/orders" element={<Orders/>}/>
    <Route path="user/orderdetails" element={<Orderdetails/>}/>
  </Routes>
  </> );
}
 
export default App;