
import SignUp from '../../sign-up/SignUp.component';
import SignIn from '../../sign-in/SignIn.component';
import './authentication.styles.scss'


const Authentication = () => {
    
    return (
        <div className='authentication-container'>
            <SignIn/>
            <SignUp/>
        </div>
    )
};

export default Authentication