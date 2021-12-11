import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import Caroussel from "./components/Caroussel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Link } from 'react-router-dom';

import politiciansService from './service/politicians';

import useStyle from "./styles/style";  

const App = () => {
  
  const [deputados, setDeputados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [page, setPage] = useState(1);

  const classes = useStyle();

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
  console.log("PARTIDOS", partidos.dados)
  return(
        <>
          {/* <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                stopOnHover={true}
                width={800}>
            <Caroussel item={partidos.dados} />
          </Carousel> */}
          <Grid container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center">
            {deputados.map((politico, index) =>{
                return(
                  <Grid item className={classes.cardWrapper} key={index}>
                    <Box>
                      <img className={classes.image} src={politico.urlFoto}></img>
                    </Box>
                    <Box>
                      <Typography className={classes.pageTitle} variant="h6" color="primary">
                        {politico.nome}
                      </Typography>
                      <Typography variant="body1" color="primary">Partido: {politico.siglaPartido}</Typography>
                      <Typography variant="body1" color="primary">UF: {politico.siglaUf}</Typography>
                    </Box>
                  </Grid>
                )
            })}
            
            <div id="sentinela"></div>
          </Grid>
        </>
        
      )}

export default App;