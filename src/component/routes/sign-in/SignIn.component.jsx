import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utils'
import SignUp from '../../sign-up/SignUp.component';
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup(); 
        createUserDocumentFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In</button>
            <SignUp/>
        </div>
    )
};

export default SignIn;