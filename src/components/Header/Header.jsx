import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header({}) {
    return (
        <header>
            <div className="header-navbar">
                <NavLink to ="/">
                    <img src={argentBankLogo} alt="Logo Argent Bank"/>
                </NavLink>
                <NavLink to ="login">
                    <span className="sign-in-link">Sign in</span>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;