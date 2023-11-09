import { useDropdown } from '../context/DropdownContext';
import {ReactComponent as ShoppingIcon } from './../assets/shopping-bag.svg';
import './../cart-icon/cart-icon.styles.scss';



const CartICon = () => {

    const {showDropdown, setShowDropdown, cartTotal} = useDropdown();

    // const handleClick = () => {
    //    if(showDropdown){
    //     setShowDropdown(false)
    //    } else {
    //     setShowDropdown(true)
    //    }
    //    console.log(showDropdown)
    // } 
    
    const toogleShowDropdown = () => setShowDropdown(!showDropdown)

    return (
        <div className='cart-icon-container' onClick={toogleShowDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartTotal}</span>
        </div>
    )
};

export default CartICon;