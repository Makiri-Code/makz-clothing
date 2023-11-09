import { useDropdown } from '../context/DropdownContext';
import './checkout-item.styles.scss';

const CheckOutItem = ({item}) => {
    const {name, quantity, price, imageUrl} = item; 
    const {addItemToCart, removeItemFromCart, deleteItemCartItem} = useDropdown();
    const deleteCartHandler = () => deleteItemCartItem(item)
    const addItemHandler = () => addItemToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    return (
                <div className='checkout-item-container'>
                    <div className='image-container'>
                        <img src={imageUrl} alt={`${name}`}/>
                    </div>
                    <span className='name'>{name}</span>
                    
                    <span className='quantity'>
                        <div className='arrow' onClick={removeItemHandler}>
                            &#10094;
                        </div>
                        <span className='value'>{quantity}</span>
                        <div className='arrow' onClick={addItemHandler}>
                            &#10095;
                        </div>
                    </span>
                    
                    <span className='price'>${price}</span>
                    <div className='remove-button' onClick={deleteCartHandler}>&#10006;</div>
                </div>
    )

};

export default CheckOutItem; 