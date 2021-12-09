import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  
  const [infos, setInfos] = useState();

  const API = "https://dadosabertos.camara.leg.br/api/v2/deputados?pagina=1&itens=12&ordem=ASC&ordenarPor=nome";
  

  useEffect(() => {
    axios.get(API)
      .then(({ data }) => {
        setInfos(data.dados); //eslint-disable-next-line
  }); 
  }, [])
  

  console.log(infos);
  if(infos.length > 0){
      return(
        <div>
          <table>
            <thead>
              <th>Nome</th>
              <th>Partido</th>
              <th>UF</th>
            </thead>
            <tbody>
              {infos.map((candidato, index) =>{
                return(
                  <tr key={index}>
                    <td>{candidato.nome}</td>
                    <td>{candidato.siglaPartido}</td>
                    <td>{candidato.siglaUf}</td>
                  </tr>
              )})}
            </tbody>
          </table>
        </div>
      )}
  // return(<></>)

}

export default App;