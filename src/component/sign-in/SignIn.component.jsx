import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import Button from "../button/Button.component";
import './sign-in-form.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => { 
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;


    const handleChange = (e) => {
        const {name, value } = e.target
        setFormFields({
            ...formFields,
            [name]: value,

        })
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const googleSignIn = async () => {
        await signInWithGooglePopup(); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
           const {user} = await signInAuthUserWithEmailAndPassword(email, password)
           
        } catch(error) {
           if(error.code === 'auth/invalid-login-credentials'){
            alert('Wrong Email or Password')
           } 
           console.log(error)
        }
        resetFormFields();
        
    };

   

    return (
       <div className="sign-up-container">
        <h2>Already have an account? </h2>
        <span>Sign up with your Email and Password</span>
        <form onSubmit= {handleSubmit}>
            <FormInput
                label= "E-mail" 
                type="email" 
                required
                name="email"
                value={email}
                onChange={handleChange} 
            />

            <FormInput
                label="Password" 
                type="password" 
                required 
                name="password"
                value={password}
                onChange={handleChange}
            />
            <div className="buttons-container">
                <Button type='submit' >Sign in</Button>
                <Button type='button' buttonType='google' onClick={googleSignIn} >Google Sign in</Button>
            </div>
        </form>
       </div>
    )
}; 

export default SignIn;