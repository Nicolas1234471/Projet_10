import './Edit_Form.scss'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUsername } from '../../features/auth/authSlice'

function EditForm({ setEditing }) {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user)
  const error = useSelector((state) => state.auth.error)
  const loading = useSelector((state) => state.auth.loading)

  const [userName, setUserName] = useState(user?.userName || '')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(editUsername({ userName }))
    setSubmitted(true)
  }

  useEffect(() => {
    if (submitted && user?.userName === userName && !loading && !error) {
      setEditing(false)
    }
  }, [user?.userName, submitted, loading, error, userName, setEditing])

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form" autoComplete="off">
      <div className="edit-profile-form-line">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="edit-profile-form-line">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={user?.firstName || ''}
          disabled
        />
      </div>

      <div className="edit-profile-form-line">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={user?.lastName || ''}
          disabled
        />
      </div>

      <div className="buttons-container">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
      </div>

      {error && <p className="error">{error}</p>}
      
    </form>
  )
}

export default EditForm