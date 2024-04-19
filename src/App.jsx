
import React from 'react'


const Button = () => {
  return(
    <button> Teste</button>
  )
}
const Form = () => {
  return (
    <>
    <label htmlFor='nome'>Nome</label>
    <input type='text' id='nome' />
    </>
  )
}



const App = () => {
 
  return (
    <><Button /><Form /></>
  )
}

export default App
