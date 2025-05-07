import './SignupForm.css'

export default function SignupForm(prop) {
    return (
        <>
            <div className="signup-form-container">
                <div className="logo">Make-Me-Pretty</div>
                <div className="welcome-text-container">
                    <span className="welcome-first">Welcome</span>
                    <span className="welcome-second">Please Create Your Account!</span>
                </div>

                <div className="login-area">
                    <input type="text" className='username-box signup-input-field' name="username-box" id="username-box" placeholder='Username / Email / Phone'/>

                    <input type="password" className='password-box signup-input-field' name="password-box" id="password-box" placeholder='Password'/>
                    <input type="password" className='password-box signup-input-field' name="retype-password-box" id="retypr-password-box" placeholder='Confirm Password'/>
                    
                    
                    <input type="submit" value="Signup" className='signup-btn' name="signup-btn" id="signup-btn" />
                    
                </div>

                <div className="other-utils">
                    <span className="util-login-text">Already Have An Account ? <a href='#' className="util-login-btn">Login!</a></span>
                </div>
            </div>
        </>
    )
}