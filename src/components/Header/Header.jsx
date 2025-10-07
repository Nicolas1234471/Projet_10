import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header({}) {
    return (
        <div className="navbar-header">
            <NavLink to ="/">
                <img src={argentBankLogo} alt="Logo Argent Bank"/>
            </NavLink>
            <NavLink to ="login">
                <span className="sign-in-link">Sign in</span>
            </NavLink>
        </div>
    )
}

export default Header;