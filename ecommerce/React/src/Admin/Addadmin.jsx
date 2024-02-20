import axios from "axios";
import { useState } from "react";
import './styles.css';
import Adminpage from "./Adminpage";
import { useLocation } from "react-router-dom";
const Addadmin = () => {
    const[username,setusername]=useState();
    const[password,setpassword]=useState();
    const[repassword,setrepassword]=useState();
    const[ email,setemail]=useState();
    const location=useLocation();
    const{state}=location;
    return ( <>
    <div className="background">
        <Adminpage active="addadmin" admin={state.admindetails}/>
        <div className="bg-light" style={{marginTop:"15%",marginBottom:"10%", marginLeft:"35%" ,marginRight:"35%",alignItems:"center",textAlign:"center",borderRadius:"10px"}}>
            <h2><i>Register admin </i> </h2>
            <input type="text" placeholder="enter adminname" value={username} onChange={(e)=>{setusername(e.target.value)}} style={{width:"90%",borderWidth:"1px",borderRadius:"5px",textAlign:"center"}} /><br/>
            <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}} style={{marginTop:"10px",width:"90%",borderWidth:"1px",borderRadius:"5px",textAlign:"center"}}/><br/>
            <input type="password" placeholder="re-enter password" value={repassword} onChange={(e)=>{setrepassword(e.target.value)}} style={{marginTop:"10px",width:"90%",borderWidth:"1px",borderRadius:"5px",textAlign:"center"}}/><br/>
            <input type="text" placeholder="enter email" value={email} onChange={(e)=>{setemail(e.target.value)}} style={{marginTop:"10px",width:"90%",borderWidth:"1px",borderRadius:"5px",textAlign:"center"}}/><br/>
            <button onClick={()=>{
                if(username!=="" && password!==""&& repassword!==""&& email!=="")
                {
                    if(password!==repassword)
                    {
                        alert("passwords mismatch");
                        setpassword("");
                        setrepassword("");
                    }
                    else{
                        axios.post("http://localhost:8080/adduser",{
                            username:username,
                            password:password,
                            email:email,
                            role:"admin"
                        }).then((res)=>{
                            alert(res.data);
                             setusername("");
                             setpassword("");
                             setemail("");
                             setrepassword("");
                        })
                    }
    
                }
                else
                {
                    alert("fill all the details");
                    setusername("");
                    setpassword("");
                }
            }} style={{margin:"10px"}} className="btn btn-primary">Register admin</button>
        </div>
    </div>
    </> );
}
 
export default Addadmin;