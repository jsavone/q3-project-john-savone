import React from 'react'
import NavBar from './NavBar'

const Main = (props) => {
  return(
    <div>
      <NavBar profile_pic="https://zcoin.io/wp-content/uploads/2017/01/blank-avatar-300x300.png"/>
      <p><a href="/reg/owner/login">Login as a Registry Owner</a></p>
      <p><a href="/reg/guest/login">Login as a Registry Guest</a></p>
      <p><a href="/create/reg">Create a Registry</a></p>
      <p><a href="/join/reg">Join a Registry as a Guest</a></p>
    </div>
  )
}

export default Main
