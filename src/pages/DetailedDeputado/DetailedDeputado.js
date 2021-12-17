import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import { Container } from './styles';
import Header from '../../components/Header';
import politiciansService from '../../service/politicians';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function DetailedDeputado() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [despesas, setDespesas] = useState([]);
  const [value, setValue] = useState(1)

  useEffect(() => {
    getDeputado(); //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDespesas(); //eslint-disable-next-line
  }, [value]);

  const getDeputado = async () => {
    try {
      setLoading(true)
      const auxDeputado = await politiciansService.getDeputadoById(id);
      if (auxDeputado) setDeputado(auxDeputado.dados);
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const getDespesas = async () => {
    try {
      setLoading(true)
      const auxDespesa = await politiciansService.getDespesas(id, value);
      if (auxDespesa) setDespesas(auxDespesa.dados);
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (deputado.length === 0 || despesas.length === 0) return <CircularProgress></CircularProgress>;
  return (
    <Container>
      <Header />
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 16,
      }}>

        {loading ? <CircularProgress></CircularProgress> :
          <>

            <Card sx={{ display: 'flex' }} style={{ marginTop: 16, marginBottom: 16, }} >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia component="img"
                  height="345px"
                  width="345px"

                  image={deputado.ultimoStatus.urlFoto}
                  alt="Deputado(a)" />

                <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }} sx={{ flex: '1 0 auto' }}>
                  <Typography>Deputado(a): {deputado.ultimoStatus.nome}</Typography>
                  <Typography>Data de nascimento: {deputado.dataNascimento}</Typography>
                  <Typography>Nascido em: {deputado.municipioNascimento}/{deputado.ufNascimento}</Typography>
                  <Typography>Escolaridade: {deputado.escolaridade}</Typography>
                  <Typography>Estado: {deputado.ultimoStatus.siglaUf}</Typography>
                  <Typography>Email: {deputado.ultimoStatus.email}</Typography>
                </CardContent>
              </Box>
            </Card>
            <Box sx={{ maxWidth: 700 }} >
              <Box sx={{ borderBottom: 1 }}>
                <Tabs value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons="auto">
                  <Tab value={1} label="Janeiro" {...a11yProps(1)} />
                  <Tab value={2} label="Fevereiro" {...a11yProps(2)} />
                  <Tab value={3} label="Março" {...a11yProps(3)} />
                  <Tab value={4} label="Abril" {...a11yProps(4)} />
                  <Tab value={5} label="Maio" {...a11yProps(5)} />
                  <Tab value={6} label="Junho" {...a11yProps(6)} />
                  <Tab value={7} label="Julho" {...a11yProps(7)} />
                  <Tab value={8} label="Agosto" {...a11yProps(8)} />
                  <Tab value={9} label="Setembro" {...a11yProps(9)} />
                  <Tab value={10} label="Outubro" {...a11yProps(10)} />
                  <Tab value={11} label="Novembro" {...a11yProps(11)} />
                  <Tab value={12} label="Dezembro" {...a11yProps(12)} />
                </Tabs>
              </Box>
            </Box>
            <TabPanel value={value} index={1}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={4}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={5}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={6}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={7}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={8}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={9}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={10}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={11}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography> {despesa.dataDocumento}</Typography>
                      <Typography> {despesa.tipoDespesa}</Typography>
                      <Typography> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>
            <TabPanel value={value} index={12}>
              {despesas.map((despesa, index) => {
                return (
                  <>
                    <Box key={despesa.codDocumento}
                      sx={{
                        display: "grid", padding: 6,
                        gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center",
                        textAlign: "center", width: 1200, alignItems: "center"
                      }}>
                      <Typography variant='body1'> {despesa.dataDocumento}</Typography>
                      <Typography variant='body1'> {despesa.tipoDespesa}</Typography>
                      <Typography variant='body1'> R$ {despesa.valorDocumento}</Typography>
                    </Box>
                    <Divider />
                  </>

                );
              })}
            </TabPanel>

          </>
        }

      </Box >
    </Container>
  )
}
