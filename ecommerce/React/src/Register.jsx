import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Admin/styles.css'
const Register = () => {
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const[repassword,setrepassword]=useState("");
    const[email,setemail]=useState("");
    const nav=useNavigate();
    return ( <>
    <div  className="background">
        <img src="logo192.png" alt="" width={"50px"} height={"50px"}/>
        <div className="bg-light" style={{marginTop:"15%",marginBottom:"10%", marginLeft:"35%" ,marginRight:"35%",alignItems:"center",textAlign:"center",borderRadius:"10px"}}>
        <h2><i>Register</i></h2>
        <input type="text" placeholder="enter username" value={name} onChange={(e)=>{setname(e.target.value)}} style={{width:"90%",borderRadius:"7px",borderWidth:"1px",textAlign:"center"}} /><br/>
        <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}} style={{marginTop:"10px", width:"90%",borderRadius:"7px",borderWidth:"1px",textAlign:"center"}}/><br/>
        <input type="password" placeholder="re-enter password" value={repassword} onChange={(e)=>{setrepassword(e.target.value)}} style={{marginTop:"10px",width:"90%",borderRadius:"7px",borderWidth:"1px",textAlign:"center"}}/><br/>
        <input type="text" placeholder="enter email" value={email} onChange={(e)=>{setemail(e.target.value)}} style={{marginTop:"10px",width:"90%",borderRadius:"7px",borderWidth:"1px",textAlign:"center"}}/><br/>
        <button onClick={()=>{
            if(name!=="" && password!==""&& repassword!==""&& email!=="")
            {
                if(password!==repassword)
                {
                    alert("passwords mismatch");
                    setpassword("");
                    setrepassword("");
                }
                else{
                    axios.post("http://localhost:8080/adduser",{
                        username:name,
                        password:password,
                        email:email,
                        role:"user"
                    }).then((res)=>{
                        alert(res.data);
                        nav("/");
                    })
                }

            }
            else
            {
                alert("fill all the details");
                setname("");
                setpassword("");
            }
            }} style={{margin:"10px"}} className="btn btn-primary">Register</button><br/>
            <p>Already have an account?<NavLink to="/">Login</NavLink></p><br/>

            
        </div>
    </div>
    </> );
}
 
export default Register;