import './Orders.css'

import { useEffect } from "react"
import useGetRequest from "../hooks/useGetRequest"

export default function Orders(){
    const {data,isLoading,getRequest}=useGetRequest()
    useEffect(()=>{
        getRequest("order")
    }
    ,[])
    console.log("orders data : " , data)
    return<>
    <div className="table-container">

    <table border={1} cellPadding={50}>
        <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Total</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Creation Date</th>
        </tr>
         {
        isLoading?<div>Loading...</div>:(
        data?.data.map((d)=>(
            <tr>
                <td>{d.id}</td>
                <td>{d.user_id}</td>
                <td>{d.total_amount}</td>
                
                
             
                    <td>{d.address}</td>
                 <td>{d.number}</td>
                    <td>
                    <select name="status" id="status" defaultValue={d.status}>
                    <option value="processing">processing</option>
                    <option value="shipped">shipped</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="delivered">Delivered</option>
                    </select>
                    
                    </td>
                <td>{d.created_at}</td>
            </tr>
        )
        ))

    }
        
    </table>

    <input type="button" value="Update" />
   

    </div>
   
    
    </>
}