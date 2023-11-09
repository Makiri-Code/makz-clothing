import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartICon from '../../cart-icon/CartIcon';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { useUser } from "../../context/User.Context";
import { useDropdown } from "../../context/DropdownContext";
import { signOutUSer } from "../../../utils/firebase/firebase.utils";
import './navigation.styles.scss'

const Navigation = () => {

  const {currentUser} = useUser();
  const {showDropdown} = useDropdown();
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <div><CrwnLogo/></div>
            </Link>
            <div className="nav-links-container">
        
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (<span className="nav-link" onClick={signOutUSer}>SIGN OUT</span>) : (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
            }
            <CartICon/>
            </div>
        </div>
        {
          showDropdown && <CartDropdown/>
        }
        <div>
          <Outlet/>
        </div>
      </Fragment>
    )
  }
  export default Navigation;