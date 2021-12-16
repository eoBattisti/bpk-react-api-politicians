import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const PartidoItem = ({item, handleDeputados}) => {


    if(item){ 
        return(
            <Paper elevation={2} variant='outlined' square>
                <Button onClick={() => handleDeputados(item.sigla)}>
                    {item.sigla.length > 6 ? `${item.sigla.slice(0, 5).trim()}` : item.sigla}
                </Button>
            </Paper>        
        )
    } else {
        return null
    }
    
}

export default PartidoItem;