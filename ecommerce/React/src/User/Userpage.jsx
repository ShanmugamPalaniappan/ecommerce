import { useNavigate } from "react-router-dom";
import '../Admin/styles.css'
import { useEffect } from "react";
import { BsCartCheck } from "react-icons/bs";
const Userpage = ({active,user,q}) => {
    const nav=useNavigate();
    useEffect(()=>{
        var x=document.getElementById(active);
        if(x!==null)
        {
          x.className="nav-link active"
        }
      },[active,user.userid])
    return ( <>
    <div className="fixed-top" >
        <ul className="nav nav-tabs"  role="tablist">
        <li className="nav-item active" >
        <b className="nav-link" id="home" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/user/home",{state:{userdetails:user}})}} >Home</b>
       </li>
       <li className="nav-item active" >
        <b className="nav-link" id="orders" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/user/orders",{state:{userdetails:user}})}} >Orders</b>
       </li>
       <li className="nav-item active" >
        <b className="nav-link" id="logout" data-bs-toggle="tab" style={{color:"black",cursor:"pointer"}} onClick={()=>{nav("/")}} >Logout</b>
       </li>
       <div style={{display:"flex"}}>

        <BsCartCheck id="Cart" style={{height:"40px",width:"35px",marginLeft:"80vw",cursor:"pointer"}} onClick={()=>{nav("/user/viewcart",{state:{userdetails:user}})}}  />
       <div style={{backgroundColor:"red",height:"22px",width:"22px",borderRadius:"11px",textAlign:"center"}}>
        <b style={{color:"white",textAlign:"center"}}>{q}</b>
       </div>
       </div>
        </ul>
    </div>
    </> );
}
 
export default Userpage;