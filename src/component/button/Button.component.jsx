import './button.style.scss'


const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherprops }) => {
    return (
        <button className= {`button-container ${buttonTypeClasses[buttonType]}` } {...otherprops}>{children}</button>
    )
}

export default Button;