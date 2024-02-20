import axios from "axios";
import { useEffect, useState } from "react";
import Userpage from "./Userpage";
import Productcard from "./Productcard";
import { useLocation } from "react-router-dom";

const Userfeed = () => {
    const[allproducts,setallproducts]=useState([]);
    const location=useLocation();
     const{state}=location;
     const[q,setq]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:8080/allproducts").then((res)=>{
            setallproducts(res.data);
        })
        axios.post("http://localhost:8080/getcartquantity",{userid:state.userdetails.userid}).then((res)=>{console.log(res.data);
        setq(res.data);
        }).catch((error)=>{console.log(error)})
    },[]);
    const addtocart=(k)=>{
        axios.post("http://localhost:8080/addtocart",k).then((res)=>{
            axios.post("http://localhost:8080/getcartquantity",{userid:state.userdetails.userid}).then((res)=>{console.log(res.data);
            setq(res.data);
        }).catch((error)=>{console.log(error)})});

    }
    return (  <>
    <div className="background" >
        <Userpage active="home" user={state.userdetails} q={q}/>
        <div style={{marginTop:"12vh"}} >
        {
            allproducts&&allproducts.map((p)=>{
                return(<>
                    <Productcard product={p} carouselid={p.productname} user={state.userdetails} addtocart={addtocart}/>
                </>)
            })
        }
    </div>
    </div>
    </>);
}
 
export default Userfeed;