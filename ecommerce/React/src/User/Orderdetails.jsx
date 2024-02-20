import { useLocation, useNavigate } from "react-router-dom";

const Orderdetails = () => {
    const location=useLocation();
    const{state}=location;
    const nav=useNavigate();
    return ( <>
    <div className="background">
    <button className="btn btn-outline-dark" onClick={()=>{nav("/user/orders",{state:{userdetails:state.user}})}}>back to orders</button>
    <div>
        <h1><i>Purchaseid: {state.order.purchaseid}</i></h1>
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
                    state.order.details&&state.order.details.map((p)=>{
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
    </div>
    </> );
}
 
export default Orderdetails;