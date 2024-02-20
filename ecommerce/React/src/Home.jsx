import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Admin/styles.css';

const Home = () => {
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const nav=useNavigate();
    return ( <>
    <div className="background">
        <img src="logo192.png" width={"50px"} height={"50px"} alt="" />
        <div  className="bg-light" style={{marginTop:"15%",marginBottom:"10%", marginLeft:"35%" ,marginRight:"35%",alignItems:"center",textAlign:"center",borderRadius:"10px"}}>
            <h2><i>Login</i></h2>
            <input type="text" placeholder="enter username" value={name} onChange={(e)=>{setname(e.target.value)}} style={{width:"90%",textAlign:"center",borderWidth:"1px",borderRadius:"5px"}}  /><br/>
            <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}} style={{margin:"10px",width:"90%",textAlign:"center",borderWidth:"1px",borderRadius:"5px"}}/><br/>
            <button className="btn btn-primary" onClick={()=>{
                if(name!=="" && password!=="")
                {
                    axios.post("http://localhost:8080/login",{
                        username:name,
                        password:password
                    }).then((res)=>{
                        if(res.data.username===null)
                        {
                            alert("user not found");
                        }
                    else{
                        if(res.data.role==="admin")
                        {
                            nav("/admin/viewallproducts",{state:{admindetails:res.data}});
                        }
                        else{
                            nav("/user/home",{state:{userdetails:res.data}});
                        }
                    }
                })
            }
            else
            {
                alert("fill all the details");
            }
            }} style={{margin:"10px"}}>Login</button><br/>
            <p>Don't have an account? <NavLink  to="/Register">SignUp</NavLink></p><br/>

            
        </div>
    </div>
    </> );
}
 
export default Home;