import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Userpage from "./Userpage";

const Cart = () => {
    const [cart,setcart]=useState([]);
    var total=0;
    var q=0;
    const location=useLocation();
    const{state}=location;
    const [x,setx]=useState(0);
    const[q1,setq1]=useState(0);
    useEffect(()=>{
        axios.post("http://localhost:8080/getcart",{user:{userid:state.userdetails.userid}}).then((res)=>{
            setcart(res.data)})
            axios.post("http://localhost:8080/getcartquantity",{userid:state.userdetails.userid}).then((res)=>{console.log(res.data);
        setq1(res.data);
        }).catch((error)=>{console.log(error)})
    },[x,state.userdetails.userid])

    return ( <>
    <div className="background">
        <Userpage active="cart" user={state.userdetails} q={q1}/>
        <div>
            <h2>Cart</h2>
            <table className="table table-bordered table-hover border border-2" style={{textAlign:"center",marginTop:"60px"}} >
                <thead  className="border border-2">
                    <tr className="border border-2">
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>cartid</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>productid</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>productname</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>costprice</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>quantity</th>  
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>amount</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>Purchase</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>Delete</th>
                    </tr>
                </thead>
                <tbody className="border border-2" >
                    {
                        cart&&cart.map((c)=>{
                            total+=c.amount;
                            q+=c.quantity;
                            return(<>
                            <tr className="border border-2">
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.cartid}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.product.productid}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.productname}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.costprice}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.quantity}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>{c.amount}</td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>
                                    <button className="btn btn-primary"
                                     onClick={()=>{
                                        axios.post("http://localhost:8080/newpurchase",{
                                            status:"pending",
                                            u:{userid:state.userdetails.userid},
                                            grandtotal:c.amount,
                                            quantity:c.quantity,
                                            details:[
                                            {
                                                product:{productid:c.product.productid},
                                                quantity:c.quantity,
                                                price:c.costprice,
                                                total:c.amount
                                            }
                                    ]}).then((res)=>{
                                        if(res.data!==0)
                                        {
                                            axios.post("http://localhost:8080/deletefromcart",{cartid:c.cartid}).then((res)=>{setx(x+1)})
                                        }
                                    })
                                    }}>Purchase </button>
                                </td>
                                <td className="border border-2" style={{backgroundColor:"transparent"}}>
                                    <button className="btn btn-danger" 
                                    onClick={()=>{
                                        axios.post("http://localhost:8080/deletefromcart",{cartid:c.cartid}).then((res)=>{setx(x+1)})
                                    }}>Delete</button>
                                </td>
                            </tr>
                            </>)
                            
                        })
                    }
                    <tr className="border border-2 ">
                    <th className="border border-2" colSpan="4" style={{backgroundColor:"transparent"}}></th>
                        <th className="border border-2" >Total</th>
                        <th className="border border-2" >{total}</th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}><button className="btn btn-primary" 
                        onClick={()=>{
                            var k=[];
                            for(var y of cart)
                            {
                                var l={
                                    product:{productid:y.product.productid},
                                    quantity:y.quantity,
                                    price:y.costprice,
                                    total:y.amount
                                }
                                k.push(l);
                            }
                            axios.post("http://localhost:8080/newpurchase",{
                                            status:"pending",
                                            u:{userid:state.userdetails.userid},
                                            grandtotal:total,
                                            quantity:q,
                                            details:k
                                            }).then((res)=>{
                                        if(res.data!==0)
                                        {
                                            axios.post("http://localhost:8080/deleteusercart",{user:{userid:cart[0].user.userid}}).then((res)=>{setx(x+1)})
                                        }
                                    })
                        }}>Purchase All</button></th>
                        <th className="border border-2" style={{backgroundColor:"transparent"}}>
                            <button className="btn btn-danger" 
                            onClick={()=>{
                            axios.post("http://localhost:8080/deleteusercart",{
                                user:{
                                    userid:cart[0].user.userid
                                    }
                                }).then((res)=>{
                                    setx(x+1);
                                })}}>Deleteall</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </> );
}
 
export default Cart;