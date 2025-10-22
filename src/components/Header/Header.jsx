import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

function Header({}) {
    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    const isLoggedIn = token

    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <header>
            <div className="header-navbar">
                <NavLink to ="/">
                    <img src={argentBankLogo} alt="Logo Argent Bank"/>
                </NavLink>
                <div className="navbar">
                    <NavLink to ="/user">
                        <span className="user-icon">{user?.userName}</span>
                    </NavLink>
                    <NavLink to ="/login">
                        <span className={isLoggedIn ? "sign-in-link-hidden" : "sign-in-link"}>Sign In</span>
                    </NavLink>
                    <NavLink to ="/">
                        <span onClick={handleLogout} className={isLoggedIn ? "sign-out-link" : "sign-out-link-hidden"}>Sign Out</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;