import { useLocation, useNavigate } from "react-router-dom";
import Userpage from "./Userpage";
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const location=useLocation();
    const{state}=location;
    const[data,setdata]=useState([]);
    const nav=useNavigate();
    const[q,setq]=useState(0);
    useEffect(()=>{
        axios.post("http://localhost:8080/getorders",{
            userid:state.userdetails.userid
        }).then((res)=>{
            setdata(res.data);
        })
        axios.post("http://localhost:8080/getcartquantity",{userid:state.userdetails.userid}).then((res)=>{console.log(res.data);
        setq(res.data);
        }).catch((error)=>{console.log(error)})
    },[state.userdetails.userid])
    return ( <>
        <div className="background">
            <Userpage active="orders" user={state.userdetails} q={q}/>
            <table className="table table-bordered table-hover " style={{marginTop:"60px"}}>
                <thead>
                    <th>purchaseid</th>
                    <th>grandtotal</th> 
                     <th>status</th>
                </thead>
                <tbody>
                {
                    data&&data.map((d)=>{
                        return(
                            <>
                                <tr>
                                    <td style={{backgroundColor:"transparent"}}><button className="btn btn-primary" onClick={()=>{
                                    nav("/user/orderdetails",{state:{order:d,user:state.userdetails}})
                                    }}>{d.purchaseid}</button></td>
                                    <td style={{backgroundColor:"transparent"}}>{d.grandtotal}</td>
                                    <td style={{backgroundColor:"transparent"}}>{d.status}</td>
                                </tr>
                            </>
                            )
                    })
                } 
                </tbody>
            </table>
        </div>
    </> );
}
 
export default Orders;