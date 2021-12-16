import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import Divider from "@material-ui/core/Divider";

import politiciansService from './service/politicians';
import ListPartidos from "./components/ListaPartidos";
import useStyle from "./styles/style";  

const App = () => {
  
  const [deputados, setDeputados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [page, setPage] = useState(1);
  const [state, setState] = useState(false); 
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
      if(auxPartidos) setPartidos(auxPartidos);
    } catch (e){
      console.log(e);
    }
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  }

  const getDeputadosByPartido = async (sigla) =>{
    try{
      const auxDeputados = await politiciansService.getDeputadosByPartido(sigla);
      if(auxDeputados) setDeputados(auxDeputados.dados);
    } catch (e){
      console.log(e)
    }
  }

  const handleDeputados =  (sigla) =>{
    getDeputadosByPartido(sigla);
  }


  console.log(partidos);
  if (partidos.length === 0) return <><div id="sentinela"></div></>;
  return(
        <>
        <Button onClick={toggleDrawer(true)} startIcon={<ListIcon />}>
        </Button>
        <Drawer
          anchor={'bottom'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          <Box style={{ height: 250, display: "flex", padding: 6 }}>
            <Box>
              <ListPartidos data={partidos.dados} handleDeputados={handleDeputados} />
            </Box>
            <Divider orientation="vertical" variant="middle"  flexItem />
          </Box>
        </Drawer>
        <Grid container 
                rowspacing={1} 
                columnspacing={{ xs: 1, sm: 2, md: 3 }}
                justifycontent="center">
            {deputados.map((politico, index) =>{
                return(
                  <Grid item className={classes.cardWrapper} key={index}>
                    <Box>
                      <img className={classes.image} src={politico.urlFoto} alt="Deputado(a)"></img>
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