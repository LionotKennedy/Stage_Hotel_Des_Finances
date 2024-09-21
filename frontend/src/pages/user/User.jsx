import React from 'react'
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'

const User = () => {
  return (
    <div className='container__users'>
       <UserCard />
       <UserCard />
       <UserCard />
    </div>
)
}

export default User
