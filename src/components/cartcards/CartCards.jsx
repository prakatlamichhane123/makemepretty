import "./CartCards.css";
import img from "../../assets/prodimg.png";
export default function(props){
    return (
        <>
            <div className="cart-card-container">
                <div className="img-and-det">

                <div className="cart-card-prod-img">
                    <img src={img} />
                </div>
                <div className="cart-card-prod-details">
                <div className="prod-title">{props.producttitle}</div>
                <div className="prod-cart-description">{props.productdecription}</div>
                </div>
                </div>
                <div className="prod-cart-price">{props.price}</div>
            </div>
        </>
    )
}

