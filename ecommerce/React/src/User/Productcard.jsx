import { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useLocation } from "react-router-dom";
const Productcard = ({product,carouselid,addtocart}) => {
    const[allimagedata,setallimagedata]=useState([]);
    const[x,setx]=useState(0);
    const location=useLocation();
    const{state}=location;
    useEffect(() => {
        async function fetchImage() {
          try {
            const a1=[];
            for( var q of product.allphotos)
            {
            const response = await fetch("http://localhost:8080/download/" + q.photoname); 
            const data = await response.blob();
            const imagedata=URL.createObjectURL(data);
            a1.push(imagedata);
            }     
          setallimagedata(a1);
          }
          catch (error) {
            console.log("Error fetching image:", error);
          }
        }
        fetchImage();
      }, [product.allphotos]);
    return (<>
    <div className="card mt-5 " style={{width:"40vw",height:"70vh",marginLeft:"30%"}}>
                <div className="card-img-top">
                    <div id={carouselid} className="carousel slide"  data-bs-ride="carousel">
                        <div className="carousel-inner">
                        {allimagedata.map((img, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                                <img src={img} alt={product.allphotos[index]} width="50%" height="250px" style={{marginLeft:"25%",marginTop:"25px"}} />
                            </div>
                        ))}
                            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselid}`} data-bs-slide="prev"><span className="carousel-control-prev-icon btn btn-secondary"></span></button>
                            <button style={{color:"black"}} className="carousel-control-next" type="button" data-bs-target={`#${carouselid}`} data-bs-slide="next"><span  className="carousel-control-next-icon btn btn-secondary"></span></button>
                        </div>
                    </div>
                    <div className="card-body" style={{marginTop:"25px",backgroundColor:"lightgrey",borderRadius:"10px",width:"90%",marginLeft:"5%"}}>
                        <h2 className="card-title">{product.productname}</h2>      
                        <p><b>Price:</b>{product.sellingprice}</p>
                        <div style={{display:"flex",height:"25px",margin:"10px"}}>
                            <CiSquareMinus onClick={()=>{if(x!==0)
                            {
                                setx(x-1);
                            }}} style={{height:"30px",width:"30px"}}/>
                            <p style={{marginLeft:"5px",marginRight:"5px"}}>{x}</p>
                            <CiSquarePlus onClick={()=>{
                                setx(x+1);
                            }} style={{height:"30px",width:"30px"}}/>
                        </div> 
                        <button className="button btn btn-primary" 
                        onClick={()=>{
                            var k={user:{userid:state.userdetails.userid},product:{productid:product.productid},quantity:x}
                            addtocart(k);
                            setx(0);
                        }}
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
    </>  );
}
 
export default Productcard;