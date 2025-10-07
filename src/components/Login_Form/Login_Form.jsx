import './Login_Form.scss'

function LoginForm ({}) {
    return (
        <section className="sign-in-box">
            <div className="icon-login"></div>
            <h1>Sign In</h1>
            <form>
                <div className="username-field">
                    <label htmlFor="username">Username
                        <input
                            type="text" 
                            id="username"
                            value=""
                            onChange=""
                        />
                    </label>
                </div>
                <div className="password-field">
                    <label htmlFor="password">Password
                        <input
                            type="password" 
                            id="password"
                            value=""
                            onChange=""
                        />
                    </label>
                </div>
                <div className="remember-field">
                    <input
                        type="checkbox"
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}

export default LoginForm;