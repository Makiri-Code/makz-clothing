import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import Button from "../button/Button.component";
import './sign-up-form.styles.scss'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => { 
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword } = formFields;

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
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            
            resetFormFields();

        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Email already exists')
            } else {
                console.log('error creating user', error)
            }
           
        }

        
    };
    return (
       <div className="sign-up-container">
        <h2>Don't have an account? </h2>
        <span>Sign up with your Email and Password</span>
        <form onSubmit= {handleSubmit}>
            <FormInput 
                label="Display Name"
                type="text" 
                required
                name="displayName"
                value={displayName}
                onChange={handleChange} 
            />

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

            <FormInput
                label="Confirm Password" 
                type="password" 
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange} 
            />
            <Button type='submit' >Sign up</Button>
        </form>
       </div>
    )
}; 

export default SignUp;