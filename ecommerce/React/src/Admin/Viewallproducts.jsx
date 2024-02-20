import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css';
import Adminpage from "./Adminpage";
import Card from "./Card";
import { useLocation } from "react-router-dom";
const Viewallproducts = () => {
      const location=useLocation();
      const{state}=location;
    const[allproducts,setallproducts]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/allproducts").then((res)=>{
            setallproducts(res.data);
        })
    },[]);
    return (<>
    <div className="background">
        <Adminpage active="home" admin={state.admindetails}/>
        <div className="d-flex flex-wrap" style={{display:"flex",marginTop:"50px"}}>{allproducts&&allproducts.map((p)=>{
            return(<>
            <div  >
                <Card product={p} carouselid={p.productname}  />
            </div>
            </>)
        })}
        </div>
    </div>
    </>  );
}
 
export default Viewallproducts;