import './LoginForm.css'

export default function LoginForm(prop) {
    return (
        <>
            <div className="login-form-container">
                <div className="logo">Make-Me-Pretty</div>
                <div className="welcome-text-container">
                    <span className="welcome-first">Welcome Back</span>
                    <span className="welcome-second">Please Login To Your Account</span>
                </div>

                <div className="login-area">
                    <input type="text" className='username-box login-input-field' name="username-box" id="username-box" placeholder='Username/Phone'/>

                    <input type="password" className='password-box login-input-field' name="password-box" id="password-box" placeholder='Password'/>
                    
                    <a href='#' className="forgot-password">Forgot password?</a>
                    
                    <input type="submit" value="Login" className='login-btn' name="login-btn" id="login-btn" />
                    
                </div>

                <div className="other-utils">
                    <span className="util-signup-text">Dont Have Account ? <a href='#' className="util-signup-btn">Signup!</a></span>
                </div>
            </div>
        </>
    )
}