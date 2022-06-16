import React from 'react'
import UserNavBar from './userNavbar'
import GuestNavBar from './guestNavbar'
import {useSelector} from 'react-redux'

function Navbar() {
  const user = useSelector((state)=> state.user.user)
  return <div>{user.token ? <UserNavBar /> : <GuestNavBar />}</div>
}

export default Navbar