import './user.scss';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountInfos from '../../components/Account_Infos/Account_Infos.jsx';
import EditForm from '../../components/Edit_Form/Edit_Form.jsx'

function User({}) {
    const [editing, setEditing] = useState(false)

    const user = useSelector((state) => state.auth.user)

    return (
        <main className="main bg-dark">
            <div className="user-header">
                <h1>
                    {!editing ? (
                    <>
                        Welcome back
                        <br />
                        
                        {user?.userName || ''}
                    </>    
                    ) : (
                        "Edit user info"
                    )}
                </h1>
                {!editing ? (
                <button className="edit-button" onClick={() => setEditing(true)}>
                    Edit Name
                </button>
                ) : (
                <EditForm setEditing={setEditing}/>
                )}
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