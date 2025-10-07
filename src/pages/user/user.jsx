import './user.scss';
import AccountInfos from '../../components/Account_Infos/Account_Infos.jsx';

function User({}) {
    return (
        <main className="main bg-dark">
            <div className="user-header">
                <h1>Welcome back<br></br>Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <AccountInfos
                accountTitle="Argent Bank Checking (x8349)"
                accountAmount="$2,082.79"
                accountAmountDescription="Available Balance"
            />
            <AccountInfos
                accountTitle="Argent Bank Savings (x6712)"
                accountAmount="$10,928.42"
                accountAmountDescription="Available Balance"
            />
            <AccountInfos
                accountTitle="Argent Bank Credit Card (x8349)"
                accountAmount="$184.30"
                accountAmountDescription="Available Balance"
            />
        </main>
    )
}

export default User;