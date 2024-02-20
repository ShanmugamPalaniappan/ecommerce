import { useLocation, useNavigate } from "react-router-dom";

const Purchasedetails = () => {
    const location=useLocation();
    const{state}=location;
    const nav=useNavigate();
    return (  <>
    <div className="background">
    <button className="btn btn-dark" onClick={()=>{nav("/admin/requests",{state:{userdetails:state.user}})}}>requests</button>
    <button className="btn btn-dark" onClick={()=>{nav("/admin/purchasehistory",{state:{userdetails:state.user}})}}>purchasehistory</button>
    <h1><i>Purchaseid: {state.purchase.purchaseid}</i></h1>
    <table className="table table-bordered">
            <thead>
                <th>pdid</th>
                <th>productname</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
            </thead>
            <tbody>
                {
                    state.purchase.details&&state.purchase.details.map((p)=>{
                    return(<>
                    <tr>
                        <td style={{backgroundColor:"transparent"}}>{p.pdid}</td>
                        <td style={{backgroundColor:"transparent"}}>{p.product.productname}</td>
                        <td style={{backgroundColor:"transparent"}}>{p.price}</td>
                        <td style={{backgroundColor:"transparent"}}>{p.quantity}</td>
                        <td style={{backgroundColor:"transparent"}}>{p.total}</td>
                    </tr>
                    </>)
                    })
                }
            </tbody>
    </table>
    </div>
    </>);
}
 
export default Purchasedetails;