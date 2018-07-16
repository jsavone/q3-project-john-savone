import React from 'react'

const Miss = (props) => {
  console.log(props.match.url)
  return(
    <div>
      <h1>{props.match.url} is not a valid path</h1>
      <a href='/'>Return home</a>
    </div>
  )
}

export default Miss
