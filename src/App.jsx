
import React from 'react';


const Button = () => {
  return(
    <button> Teste</button>
  );
};
const Form = () => {
  return (
    <>
    <label htmlFor='nome'>Nome</label>
    <input type='text' id='nome' />
    </>
  );
};

const titulo = <h1>Esse é um titulo</h1>;
const Chaves = () =>{
  const random = Math.random();
  const ativo = true;

  return(
    <>
    {titulo}
    <p className={ativo ? 'ativo' : 'inativo'}>{(random*100 )/ 50}</p>
    <p>{new Date().getFullYear()}</p>
    </>
  );
};








const App = () => {
 
  return (
    <><Button />
    <Form />
    <Chaves />
    </>
  );
};

export default App
