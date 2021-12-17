import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Container } from './style'
const PartidoItem = ({ item, handleDeputados }) => {


    if (item) {
        return (
            <Container>
                <Paper style={{ margin: 6, borderColor: "#393E41" }} elevation={2} variant='outlined' square>
                    <Button onClick={() => handleDeputados(item.sigla)}>
                        {item.sigla.length > 6 ? `${item.sigla.slice(0, 5).trim()}` : item.sigla}
                    </Button>
                </Paper>
            </Container>
        )
    } else {
        return null
    }

}

export default PartidoItem;