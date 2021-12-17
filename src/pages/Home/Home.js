import React, { useEffect, useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import politiciansService from '../../service/politicians';

import Header from '../../components/Header/index';
import { Container } from './styles'

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [deputados, setDeputados] = useState([]);
    const [partidos, setPartidos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getAllDeputados(page);//eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        getAllPartidos();
    }, [])

    useEffect(() => {
        // Observe the sentinel element, when it's finded
        // change the page's value to do a new request
        const intersectionObserver = new IntersectionObserver((entries) => {

            if (entries.some((entry) => entry.isIntersecting)) {
                setPage((currentPageInsideState) => currentPageInsideState + 1);
            }
        });

        intersectionObserver.observe(document.querySelector('#sentinela'));

        return () => intersectionObserver.disconnect();

    }, [])

    const getAllDeputados = async (page) => {
        try {
            setLoading(true);
            const auxDeputados = await politiciansService.getAllDeputados(page)
            setDeputados(prevDeputados => {
                return [...new Set([...prevDeputados, ...auxDeputados.dados])]
            });
            setLoading(false);
        } catch (e) {
            if (deputados.length > 0) return;
            console.log(e);
        }
    }

    const getAllPartidos = async () => {
        try {
            const auxPartidos = await politiciansService.getAllPartidos();
            setPartidos(auxPartidos);
        } catch (e) {
            console.log(e);
        }
    }

    const getDeputadosByPartido = async (sigla) => {
        try {
            const auxDeputados = await politiciansService.getDeputadosByPartido(sigla);
            if (auxDeputados) setDeputados(auxDeputados.dados);
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeputados = (sigla) => {
        getDeputadosByPartido(sigla);
    }


    return (
        <Container>
            <Header partidos={partidos.dados} handleDeputados={handleDeputados} />
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    width: "90%"
                }}>
                    {deputados.map((politico, index) => {
                        return (
                            <Card key={politico.id} sx={{ maxWidth: 345, }}
                                style={{ margin: 6, }} >
                                <CardMedia component="img"
                                    height="345"
                                    width="345"

                                    image={politico.urlFoto}
                                    alt="Deputado(a)" />
                                {/* <img className={classes.image} src={} alt="Foto do(a) deputado"></img> */}
                                <CardContent>
                                    <Typography variant="h6" color="primary">
                                        {politico.nome}
                                    </Typography>
                                    <Typography variant="body1" color="primary">Partido: {politico.siglaPartido}</Typography>
                                    <Typography variant="body1" color="primary">UF: {politico.siglaUf}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" href={`/deputado/${politico.id}`}>
                                        Confira
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })}

                    <div id="sentinela"></div>
                </Box>

            </Box>
        </Container>

    )
}
