
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Produtos from './Produtos';
import Home from './Home';
import ButtonModal from './ButtonModal';
import { useState } from 'react';
import Modal from './Modal';
import Produto from './Produto';

// const Button = () => {
//   return(
//     <button> Teste</button>
//   );
// };
// const Form = () => {
//   return (
//     <>
//     <label htmlFor='nome'>Nome</label>
//     <input type='text' id='nome' />
//     </>
//   );
// };

// const titulo = <h1>Esse é um titulo</h1>;
// const Chaves = () =>{
//   const random = Math.random();
//   const ativo = true;

//   return(
//     <>
//     {titulo}
//     <p className={ativo ? 'ativo' : 'inativo'}>{(random*100 )/ 50}</p>
//     <p>{new Date().getFullYear()}</p>
//     </>
//   );
// };

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//   .map((item) => Number(item.preco.replace('R$ ', '')))
//   .reduce((a, b) => a + b);

//   return <div>
//     <p>Nome: {dados.cliente}</p>
//     <p>Idade: {dados.idade}</p>
//     <p style={{ color: dados.ativa ? 'green' : 'red' }}>Situação: {dados.ativa ? 'ativo' : 'inativo'}</p>
//     <p>Nome: {dados.cliente}</p>
//      <p>Total: R$ {total}</p>
//       {total > 10000 && <p>Você está gastando muito</p>}
//   </div>;
// };

// const Filmes = () =>{
//   const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
//   return(
//     <ul>
//       {filmes.map((filme) =>(
//         <li key={filme}>{filme}</li>
//       ))}
//     </ul>
//   )
// }

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];
// const App = () => {
//    return(
//     <section>
//       {produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500).map(({id, nome, preco, cores}) => (<div key={id}>
//         <h1>{nome}</h1>
//         <p>Preço: {preco}</p>
//         <ul>
//           {cores.map((cor) => (
//             <li style={{backgroundColor: cor, color: "white"}} key={cor}>{cor}</li>
//           ))}
//         </ul>
//       </div>
//   ))} 
//     </section>
//   )
// };



// const App = () => {
//   const handleClick = (event) =>{
//     console.log(event)
//   }

//     return(
//      <button onClick={handleClick} onMouseMove={handleClick}> Clique</button>
//     )
// }
// const App = () =>{
//   let Pagina = Home;
//   const { pathname } = window.location;
//   if(pathname === '/produtos'){
//     Pagina = Produtos;
//   }else {
//     Pagina = Home;
//   }

//   return(
//     <>
//     <Header />
//     <Pagina />
//     </>
//   )
// }


// const App = () => {
//   const ativo = true;

//   return (
//     <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
//   );
// };

// const App = () => {
//   let ativo = true;

//   function handleClick(){
//     ativo = !ativo;
//     console.log(ativo)
//   }


//   return (
//     <button onClick={handleClick}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
//   );
// };


// const App = () => {
  
//   const [ativo, setAtivo] = React.useState(false);
  

    

//   function handleClick(){
//     setAtivo(!ativo)
//   }

//   return(
//     <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
//   )
// }

// const App=()=>{
//   const [modal, setModal] = useState(false)

//   return(
//     <div>
//     <div>{modal ? 'Modal aberto' : 'Modal Fechado'}</div>
//     <Modal modal={modal}setModal={setModal} />
//     <ButtonModal setModal={setModal}/>
//     </div>
//   );
// }

// const App = () => {
//   const [items, setItems] = React.useState(['Item 1', 'Item 2']);

//   function handleClick() {
//     // Errado. Modifique o estado apenas com a função de atualização (setItems)
//     items.push('Novo Item');
//   }

//   function handleClickReativo() {
//     // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
//     setItems([...items, 'Novo Item']);
// }

//   return (
//     <>
//       {items.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//       <button onClick={handleClick}>Adicionar Item</button>
//       <button onClick={handleClickReativo}>Adicionar Reativo</button>
//     </>
//   );
// };


// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);

//   function handleClick() {
//     // usando um callback
//     setAtivo((anterior) => !anterior);
//   }

//   return (
//     <button onClick={handleClick}>
//       {ativo ? 'Está Ativo' : 'Está Inativo'}
//     </button>
//   );
// };
// const App = () => {
//   // Callback no estado inicial, só será executado na criação do componente
//   const [ativo, setAtivo] = React.useState(() => {
//     const ativoLocal = window.localStorage.getItem('ativo');
//     return ativoLocal;
//   });

//   function handleClick() {
//     setAtivo((anterior) => !anterior);
//   }

//   return (
//     <button onClick={handleClick}>
//       {ativo ? 'Está Ativo' : 'Está Inativo'}
//     </button>
//   );
// };

const App = () =>{
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event){
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  


  return(
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {! carregando && dados && <Produto dados={dados}/>}
    </div>
  )
}


// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook


export default App











