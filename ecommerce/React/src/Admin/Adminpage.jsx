import { useNavigate } from "react-router-dom";
import './styles.css';
import { useEffect } from "react";

const Adminpage = ({active,admin}) => {
    
    const nav=useNavigate();
    useEffect(()=>{
      var x=document.getElementById(active);
      if(x!==null)
      {
        x.className="nav-link active"
      }
    },[active])
    return ( <>
    <div className="fixed-top "  >
  <ul className="nav nav-tabs"  role="tablist">
    <li className="nav-item active" >
      <b className="nav-link" id="home" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{ nav("/admin/viewallproducts",{state:{admindetails:admin}});}} >Home</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="adduser" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}}  onClick={()=>{nav("/admin/adduser",{state:{admindetails:admin}});}}>adduser</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="viewallusers" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/viewallusers",{state:{admindetails:admin}})}}>Viewallusers</b>
    </li>
    <li className="nav-item">
      <b className="nav-link " id="addadmin" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/addadmin",{state:{admindetails:admin}})}}>addadmin</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="viewalladmins" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/viewalladmins",{state:{admindetails:admin}})}}>Viewalladmins</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="addproduct" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/addproduct",{state:{admindetails:admin}})}}>addproduct</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="requests" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/requests",{state:{admindetails:admin}})}}>requests</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" id="purchasehistory" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/admin/purchasehistory",{state:{admindetails:admin}})}}>purchasehistory</b>
    </li>
    <li className="nav-item">
      <b className="nav-link" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/")}}>logout</b>
    </li>
    <li className="nav-item ">
    </li>
  </ul>
  </div>
    </> );
}
 
export default Adminpage;