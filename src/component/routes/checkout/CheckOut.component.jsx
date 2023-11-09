
import { useDropdown } from '../../context/DropdownContext';
import CheckOutItem from '../../checkout-item/CheckoutItem.component';
import './checkout.styles.scss'; 

const CheckOut = () => {
    const {cartItems,checkoutTotal} = useDropdown();  
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
                
            </div>
                {
                     cartItems.map((item) => {
                        return (
                                <CheckOutItem 
                                    item={item}
                                    key={item.id}
                                />
                        )
                    })
                }
                <span className='total'>Total: ${checkoutTotal}</span>
        </div>
       
    )
};

export default CheckOut;