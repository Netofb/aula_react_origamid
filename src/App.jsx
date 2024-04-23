
import React from 'react';


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
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];






const App = () => {
  return (
    <>
      <section>
        {produtos.map((produto) => {
          const valor = Number(produto.preco.replace('R$ ', ''));
          if (valor > 1500) {
            return (
              <div key={produto.id}>
                <h1>{produto.nome}</h1>
                <p>{valor}</p>
                <p>{produto.cores.join(', ')}</p>
              </div>
            );
          }
          return null; // Se não atender à condição, retorna null
        })}
      </section>
    </>
  );
};


export default App
