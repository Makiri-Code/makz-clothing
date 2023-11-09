import Button from "../button/Button.component";
import { useDropdown } from "../context/DropdownContext";
import './product-card.styles.scss'

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const {addItemToCart} = useDropdown();
    const addProductToCartHandler = () => addItemToCart(product);
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType= 'inverted' onClick={addProductToCartHandler}>Add to cart</Button>
        </div>
    )
}; 

export default ProductCard; 