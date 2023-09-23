import React from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const { user } = React.useContext(UserContext)

  if (!user) return (
    <div>
      <h1 className='text-2xl font-bold'>Profile</h1>
      <p className='text-xl'>No user logged in</p>
    </div>
  )

  return (
    <div>
      <h1 className='text-2xl font-bold'>Profile</h1>
      <p className='text-xl'>Email: {user.email}</p>
      <p className='text-xl'>Password: {user.password}</p>
    </div>
  )
}

export default Profile