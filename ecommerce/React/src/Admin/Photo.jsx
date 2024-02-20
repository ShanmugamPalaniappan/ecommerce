import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Photo = ({photo,buttonclick}) => {
    const [imageData, setImageData] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch("http://localhost:8080/download/" + photo); // Change the image name as needed
        const data = await response.blob();
        setImageData(URL.createObjectURL(data));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }

    fetchImage();
  }, [photo]);
    return ( <>
    <div style={{marginLeft:"20px"}}>
        <div style={{display:"flex"}}>
            <p>{photo}</p>
            <AiOutlineCloseCircle style={{color:"red",cursor:"pointer"}} onClick={()=>{buttonclick(photo)}}/>
        </div>
    <img src={imageData} alt={photo} width="100px" height="100px"/>
    </div>
    </> );
}
 
export default Photo;