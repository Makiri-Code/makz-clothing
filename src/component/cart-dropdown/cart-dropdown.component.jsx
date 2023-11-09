import { useNavigate } from 'react-router-dom';
import Button from './../button/Button.component';
import CartItem from '../cart-item/CartItem.component';
import { useDropdown } from '../context/DropdownContext';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const navigate = useNavigate(); 
    const {cartItems} = useDropdown();
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((cartItem)=>{
                        return (
                            <CartItem cartItem={cartItem}/>
                        )
                    })
                }
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;