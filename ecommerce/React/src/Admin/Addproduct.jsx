import axios from "axios";
import { useState } from "react";
import Photo from "./Photo";
import './styles.css';
import Adminpage from "./Adminpage";
import { useLocation } from "react-router-dom";

const Addproduct = () => {
    const[productname,setproductname]=useState("");
    const[selectedfile,setselectedfile]=useState("");
    const[photos,setphotos]=useState([]);
    const[costprice,setcostprice]=useState("");
    const[sellingprice,setsellingprice]=useState("");
    const location=useLocation();
    const{state}=location;
    const buttonclick = (r) => {
        axios.post("http://localhost:8080/deletefile/" + r).then((res) => {
            const x = photos.filter((d) => {
            return d !== r;
          });
          setphotos(x);
        });
    };
    const filedata=()=>{
        if (selectedfile) {
            return (
              <div>
                <h2>File Details:</h2>
                <p>File Name: {selectedfile.name}</p>
      
                <p>File Type: {selectedfile.type}</p>
      
                <p>Last Modified: {selectedfile.lastModifiedDate.toDateString()}</p>
              </div>
            );
          } else {
            return (
              <div>
                <br />
                <h4>Choose before Pressing the Upload button</h4>
              </div>
            );
          }
    }

    return ( 
    <>
    <div className="background">
      <Adminpage active="addproduct" admin={state.admindetails}/>
        <div  style={{marginTop:"60px"}}>  
          <br/><input type="text" placeholder="enter product name" value={productname}  style={{ borderWidth:"1px", borderRadius:"5px"}} onChange={(e)=>{setproductname(e.target.value)}}/>
          <input type="file" style={{marginLeft:"10px"}} onChange={(e)=>{
              var x=e.target.files[0].name;
              var y=x.split(".");
              if(y[1]==="png" || y[1]==="jpg" || y[1]==="jpeg"){
                  setselectedfile(e.target.files[0]);
              }
              else{
                  alert("only image is supported");
                  setselectedfile("");
              }
              }}
          />
          <button className="btn btn-outline-dark" style={{ borderWidth:"2px"}} onClick={()=>{
            if(selectedfile!=="" && productname!=="")
            {
              const formdata=new FormData();
              var k=productname+(photos.length+1)+selectedfile.name;
              formdata.append("file",selectedfile);
              formdata.append("name",k);
              axios.post("http://localhost:8080/upload",formdata).then((res)=>{   
                    if(res.data===k)
                    {
                        setphotos([...photos,res.data])
                    }
                    else
                    {
                        alert("server error");
                        console.log(res.data);
                    }
                    setselectedfile("");
                  
              })
            }
            else
            {
              alert("something is missing");
            }}}
          >upload!</button>
          <button style={{ borderWidth:"2px",marginLeft:"10px"}} className="btn btn-outline-dark" onClick={()=>{
            if(productname!==""&&costprice!=="" && sellingprice!=="")
            {
              var allphotos=[];
              for(var p of photos)
              {
                allphotos.push({photoname:p})
              }
              axios.post("http://localhost:8080/addproduct",{
                productname:productname,
                costprice:costprice,
                sellingprice:sellingprice,
                allphotos:allphotos
              }).then((res)=>{
                alert("success");
                setproductname("");
                setphotos("");
                setselectedfile("");
                setsellingprice("");
                setcostprice("");
              })
            }
            else{
              alert("couldnt add product ")
            }}}
          >addproduct</button><br/>
          <div style={{marginTop:"15px"}}>
              <input type="number" placeholder="enter costprice" value={costprice} style={{borderWidth:"1px", borderRadius:"5px"}} onChange={(e)=>{setcostprice(e.target.value)}}/>
              <input type="number" placeholder="enter sellingprice" value={sellingprice}  onChange={(e)=>{setsellingprice(e.target.value)}} style={{marginLeft:"10px",borderWidth:"1px", borderRadius:"5px"}}/>
          </div>
        </div>

        <div >
          {filedata()}
          <br/>
          <div style={{display:"flex"}}>
          {
              photos&&photos.map((p)=>{return(<>
              <Photo photo={p} buttonclick={buttonclick} /> 
              </>)})
          }
          </div>
        </div>
    </div>
    </> );
}
 
export default Addproduct;