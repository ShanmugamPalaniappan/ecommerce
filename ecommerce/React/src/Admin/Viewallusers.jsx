import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css';
import Adminpage from "./Adminpage";
import { useLocation } from "react-router-dom";
const Viewallusers = () => {
    const[details,setdetails]=useState();
    const[userdata,setuserdata]=useState("");
    const location=useLocation();
    const{state}=location;
    useEffect(()=>{
        axios.get("http://localhost:8080/allusers").then((res)=>{
            setdetails(res.data);
        })
    },[userdata])
    return ( <>
    <div className="background">
    <Adminpage active="viewallusers" admin={state.admindetails}/>
    <table className="table table-bordered table-hover border border-2" style={{textAlign:"center",marginTop:"60px"}}>
        <thead className="border border-2">
            <th className="border border-2">userid</th>
            <th className="border border-2">username</th>
            <th className="border border-2">password</th>
            <th className="border border-2">email</th>
            <th className="border border-2">edit</th>
            <th className="border border-2">delete</th>
        </thead>
        <tbody className="border border-2">
        {
            details&&details.map((user)=>{
                return(<tr className="border border-2" >
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>{user.userid}</td>
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>{user.username}</td>
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>{user.password}</td>
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>{user.email}</td>
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>
                        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" onClick={()=>{setuserdata(user) }} >Edit</button>
                    </td>
                    <td className="border border-2" style={{backgroundColor:"transparent"}}>
                        <button className="btn btn-danger" onClick={()=>{
                            axios.post("http://localhost:8080/deleteuser",{
                                userid:user.userid
                            }).then((res)=>{
                                console.log(res.data);
                                setdetails((allusers)=>
                                allusers.filter((user1)=>
                                    user1.userid!==user.userid
                                ))
                            })}}>Delete
                        </button>
                    </td>
                </tr>)
            }
        )}
    </tbody>
    </table>
    <div  className="modal " id="modal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Edit user</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body" >
                    <label ><b>Username :</b></label>
                    <input  style={{borderRadius:"5px",margin:"5px",borderWidth: "1px",textAlign:"center",width:"75%"}} value={userdata.username} onChange={(e)=>{setuserdata({...userdata,username:e.target.value})}}/><br/>
                    <label><b>Password &nbsp;: </b></label>
                    <input style={{borderRadius:"5px",margin:"5px",borderWidth: "1px",textAlign:"center",width:"75%"}} value={userdata.password} onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}} /><br/>
                    <label ><b>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b></label>
                    <input style={{borderRadius:"5px",margin:"5px",borderWidth: "1px",textAlign:"center",width:"75%"}} value={userdata.email} onChange={(e)=>{setuserdata({...userdata,email:e.target.value})}}/><br/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                     onClick={()=>{axios.post("http://localhost:8080/updateuser",{
                        userid:userdata.userid,
                        username:userdata.username,
                        password:userdata.password,
                        email:userdata.email
                    }).then((res)=>{setuserdata("")})}}>save</button>
                </div>
            </div>
        </div>
    </div>
    </div>

    </> );
}
 
export default Viewallusers;