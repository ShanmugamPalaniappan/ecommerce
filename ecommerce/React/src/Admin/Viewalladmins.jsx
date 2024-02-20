import axios from "axios";
import { useEffect, useState } from "react";
import Adminpage from "./Adminpage";
import { useLocation } from "react-router-dom";

const Viewalladmins = () => {
    const[details,setdetails]=useState();
    const location=useLocation();
    const{state}=location;
    useEffect(()=>{
        axios.get("http://localhost:8080/alladmins")
        .then((res)=>{
            setdetails(res.data)
        })
    },[]);
    return ( <>
    <div className="background">
        <Adminpage active="viewalladmins" admin={state.admindetails}/>
        <table className="table table-bordered table-hover border border-2 " style={{textAlign:"center",marginTop:"60px"}}>
            <thead className="border border-2">
                <th className="border border-2">id</th>
                <th className="border border-2">name</th>
                <th className="border border-2">email</th>
            </thead>
            <tbody className="border border-2">
            {
                details&&details.map((admin)=>{
                    return(<>
                    <tr className="border border-2">
                        <td className="border border-2" style={{backgroundColor:"transparent"}}>{admin.userid}</td>
                        <td className="border border-2" style={{backgroundColor:"transparent"}}>{admin.username}</td>
                        <td className="border border-2" style={{backgroundColor:"transparent"}}>{admin.email}</td>
                    </tr>
                    </>)
                })
            }
            </tbody>
        </table>
    </div>
    </> );
}
 
export default Viewalladmins;