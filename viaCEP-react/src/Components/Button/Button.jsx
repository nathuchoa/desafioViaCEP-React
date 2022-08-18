import React from 'react'

const Button = ({texto}) => {
  function handleClick(e){
    e.preventDefault()
    console.log('btn funciona')
  }
  return (
    <button onClick={handleClick}>{texto}</button>
  )
}

export default Button