import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Adminpage from "./Adminpage";

const Purchasehistory = () => {
    const location=useLocation();
    const{state}=location;
    const[data,setdata]=useState([]);
    const nav=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/getpurchasehistory").then((res)=>{
            console.log(res.data);
            setdata(res.data)})
    },[])
    return (  <>
    <div className="background">
        <Adminpage active="purchasehistory" admin={state.admindetails}/>
        <table className="table table-bordered" style={{marginTop:"60px"}}>
        <thead >
            <th>userid</th>
            <th>purchaseid</th>
            <th>grandtotal</th>
            <th>status</th>
        </thead>
        <tbody>
        {
            data&&data.map((d)=>{
                return(<>
                <tr>
                    <td style={{backgroundColor:"transparent"}}>{d.u.userid}</td>
                    <td style={{backgroundColor:"transparent"}}><button className="btn btn-success" onClick={()=>{nav("/admin/purchasedetails",{state:{purchase:d,admin:state.admindetails}})}}>{d.purchaseid}</button></td>
                    <td style={{backgroundColor:"transparent"}}>{d.grandtotal}</td>
                    <td style={{backgroundColor:"transparent"}}>{d.status}</td>
                </tr>
                </>)
            })
        }
        </tbody>
        </table>
    </div>
    </>);
}
 
export default Purchasehistory;