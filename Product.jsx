import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    return(
        <div className="product">
            <img src={"./images/"+props.data.image}></img>
            <h5>{props.data.title} </h5>
            <div className="prices ">
                <label>$</label>
            <label>{props.data.price.toFixed(2)}</label>
            
        </div>
        <QuantityPicker/>
        </div>
            
    );
}
export default Product;