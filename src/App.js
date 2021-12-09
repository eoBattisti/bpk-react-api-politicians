import React, { useEffect, useState } from "react";

import Caroussel from "./components/Caroussel";

import politiciansService from './service/politicians';



const App = () => {
  
  const [deputados, setDeputados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [page, setPage] = useState(1);



  useEffect(() => {
    getAllDeputados(page);//eslint-disable-next-line
  }, [page]); 

  useEffect(() =>{
    getAllPartidos();
  }, [])

  useEffect(() => {
    // Observe the sentinel element, when it's finded
    // change the page's value to do a new request
    const intersectionObserver = new IntersectionObserver((entries) => {
      
      if(entries.some((entry) => entry.isIntersecting)){
        setPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });

    intersectionObserver.observe(document.querySelector('#sentinela'));

    return () => intersectionObserver.disconnect();

  }, [])
  
  const getAllDeputados = async (page) =>{
    try{
      const auxDeputados = await politiciansService.getAllDeputados(page)
      console.log(auxDeputados);
      setDeputados(prevDeputados => {
        return [...new Set([...prevDeputados, ...auxDeputados.dados])]
      });
    } catch (e) {
      console.log(e);
    }
  }

  const getAllPartidos = async () => {
    try{
      const auxPartidos = await politiciansService.getAllPartidos();
      setPartidos(auxPartidos);
    } catch (e){
      console.log(e);
    }
  }
  console.log("DEPUTADOS:", deputados);

  return(
        <>
          <Caroussel item={partidos.dados} />
          <div>
            <table>
              <thead>
                <td>Nome</td>
                <td>Partido</td>
                <td>UF</td>
              </thead>
              <tbody>
                {deputados.map((candidato, index) =>{
                  return(
                    <tr key={index}>
                      <td>{candidato.nome}</td>
                      <td>{candidato.siglaPartido}</td>
                      <td>{candidato.siglaUf}</td>
                    </tr>
                )})}
              </tbody>
            </table>
            <div id="sentinela"></div>
          </div>
        </>
        
      )}

export default App;