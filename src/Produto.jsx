import React from 'react'

// const Produto = ({nome, propriedades}) => {
//   return (
//     <div style={{border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
//       <p>{nome}</p>
//       <ul>
//         {propriedades.map((propriedade) =>(
//             <li>{propriedade}</li>
//         ))}   
//       </ul>
//     </div>
//   )
// }
const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <h1>{dados.preco}</h1>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  )
}

export default Produto
