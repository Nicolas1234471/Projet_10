import './Login_Form.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

function LoginForm ({}) {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) return

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/user')
      })
      .catch(() => {
      })
  }

    return (
        <section className="sign-in-box">
            <div className="icon-login"></div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="username-field">
                    <label htmlFor="username">Username
                        <input
                            type="text" 
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="password-field">
                    <label htmlFor="password">Password
                        <input
                            type="password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                <button className="sign-in-button" disabled={loading}>Sign In</button>
            </form>
        </section>
    )
}

export default LoginForm;