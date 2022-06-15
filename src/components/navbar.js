import React from 'react'
import UserNavBar from './userNavbar'
import GuestNavBar from './guestNavbar'

function Navbar() {
  return <div>{false ? <UserNavBar /> : <GuestNavBar />}</div>
}

export default Navbar