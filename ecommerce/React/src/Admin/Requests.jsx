import { useLocation, useNavigate } from "react-router-dom";
import Adminpage from "./Adminpage";
import { useEffect, useState } from "react";
import axios from "axios";

const Requests = () => {
    const location=useLocation();
    const{state}=location;
    const[allrequests,setallrequests]=useState([]);
    const[x,setx]=useState(0);
    const nav=useNavigate();
    useEffect(()=>{
        axios.post("http://localhost:8080/getrequests").then((res)=>{
            setallrequests(res.data)})
    },[x])
    return (<>
    <Adminpage active="requests" admin={state.admindetails} />
    <div className="background">
        <table className="table table-bordered" style={{marginTop:"60px"}}>
        <thead >
            <th>userid</th>
            <th>purchaseid</th>
            <th>grandtotal</th>
            <th>status</th>
            <th>Accept</th>
            <th>Reject</th>
        </thead>
        <tbody>
            {allrequests.map((req)=>{
                return(<>
                <tr>
                    <td style={{backgroundColor:"transparent"}}>{req.u.userid}</td>
                    <td style={{backgroundColor:"transparent"}}><button className="btn btn-success" onClick={()=>{nav("/admin/purchasedetails",{state:{purchase:req,admin:state.admindetails}})}}>{req.purchaseid}</button></td>
                    <td style={{backgroundColor:"transparent"}}>{req.grandtotal}</td>
                    <td style={{backgroundColor:"transparent"}}>{req.status}</td>
                    <td style={{backgroundColor:"transparent"}}><button className="btn btn-success" onClick={()=>{
                        axios.post("http://localhost:8080/changestatus",{purchaseid:req.purchaseid,status:"completed"}).then((res)=>{console.log(res.data);setx(x+1)})
                    }}>Accept</button></td>
                    <td style={{backgroundColor:"transparent"}}><button className="btn btn-danger" onClick={()=>{
                        axios.post("http://localhost:8080/changestatus",{purchaseid:req.purchaseid,status:"cancelled"}).then((res)=>{console.log(res.data);setx(x+1)})
                    }}>Reject</button></td>
                </tr>
                </>)
            })

            }
        </tbody>
        </table>
    </div>
    </>  );
}
 
export default Requests;