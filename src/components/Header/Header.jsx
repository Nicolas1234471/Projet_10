import argentBankLogo from '../../assets/images/argentBankLogo.webp';
import userIcon from '../../assets/images/user-icon.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

function Header({}) {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user)

    const isLoggedIn = sessionStorage.getItem('token')

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
                    <NavLink to ="/user" className={isLoggedIn ? "" : "hidden"}>
                        <img src={userIcon} alt="User Icon" className="user-icon"/>
                        <span className="user-link">
                            {user?.userName}
                        </span>
                    </NavLink>
                    <NavLink to ="/login">
                        <span className={isLoggedIn ? "hidden" : "sign-in-link"}>Sign In</span>
                    </NavLink>
                    <NavLink to ="/">
                        <img src={logoutIcon} alt="Logout Icon" className={isLoggedIn ? "signout-icon" : "hidden"}/>
                        <span onClick={handleLogout} className={isLoggedIn ? "sign-out-link" : "hidden"}>Sign Out</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;