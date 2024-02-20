import { useEffect, useState } from "react";

const Card = ({product,carouselid}) => {
    const[allimagedata,setallimagedata]=useState([]);
    useEffect(() => {
        async function fetchImage() {
          try {
            const a1=[];
            for( var q of product.allphotos)
            {
            const response = await fetch("http://localhost:8080/download/" + q.photoname); // Change the image name as needed
            const data = await response.blob();
            const imagedata=URL.createObjectURL(data);
            a1.push(imagedata);
            }     
          setallimagedata(a1);
          }
          catch (error) {
            console.error("Error fetching image:", error);
          }
        }
        fetchImage();
      }, [product.allphotos]);
    return (<>
        <div className="card mt-5 " style={{width:"30vw", height:"70vh",marginLeft:"30px",overflow:"auto"}}>
            <div className="card-img-top">
                <div id={carouselid} className="carousel slide"  data-bs-ride="carousel">
                <div className="carousel-inner">
                {allimagedata.map((img, index) => (
                    <div style={{width:"20vw",height:"40vh",marginLeft:"5vw",marginTop:"5vh"}} key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={img} alt={product.allphotos[index]} width="80%" height="90%" style={{ marginTop: "5%", marginLeft: "10%" }} />
                    </div>
                ))}
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselid}`} data-bs-slide="prev"><span className="carousel-control-prev-icon btn btn-secondary"></span></button>
                    <button style={{color:"black"}} className="carousel-control-next" type="button" data-bs-target={`#${carouselid}`} data-bs-slide="next"><span  className="carousel-control-next-icon btn btn-secondary"></span></button>
                </div>
            </div>
            <div className="card-body" style={{backgroundColor:"whitesmoke",width:"26vw",height:"20vh",marginLeft:"2vw",marginTop:"2.5vh"}}>
                <h4 className="card-title">{product.productname}</h4>
                <p><b>Available:</b>{product.quantity}</p>

            </div>

        </div>
        </div>
    </>  );
}
 
export default Card;