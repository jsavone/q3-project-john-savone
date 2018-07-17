import React from 'react'
import NavBar from './NavBar'

const Main = (props) => {
  return(
    <div>
      <NavBar />
      <p><a href="/create/reg">Create a Registry</a></p>
      <p><a href="/join/reg">Join a Registry as a Guest</a></p>
    </div>
  )
}

export default Main
