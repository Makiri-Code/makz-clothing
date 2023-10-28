import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss'
const Navigation = () => {
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
            <Link className="nav-link" to='sign-in'>
                SIGN IN
            </Link>
            {/* <Link className="nav-link" to='sign-up'>
                SIGN UP
            </Link> */}
            </div>
        </div>
        <div>
          <Outlet/>
        </div>
      </Fragment>
    )
  }
  export default Navigation;