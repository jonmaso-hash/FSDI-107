import Product from "../components/Product"
import "./Catalog.css";

function Catalog(){
    return(
<div className = "catalog">
    <h1>Our Amazing Catalog</h1>
    <Product/>
    <Product/> 
    <Product/>
    
</div>
    );
}

export default Catalog;