import "./ProductDetail.css"
import img from "../assets/prodimg.png"
import { useEffect } from "react"
import useGetRequest from "../hooks/useGetRequest"
// import { Cookies } from "react-cookie";const cookies = new Cookies();

export default function ProductDetail(){
           
    return <>
    
        <div className="product-detail-container">
                <div className="product-detail-left-side">
                    <div className="prod-img"><img src={img} /></div>
                </div>
                <div className="product-detail-right-side">
                    <div className="p-prod-title">Ankur Perfume</div>
                    <div className="p-prod-description">Perfect Perfume very good perfume nice perfume</div>
                    <div className="p-prod-price">Rs . 5000</div>
                    <div className="p-utils-btns">
                    <div className="add-to-cart-btn">Add to Cart</div>
                    </div>

                </div>
        </div>
    </>
}