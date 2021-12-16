import React from 'react';
import Box from '@material-ui/core/Box';

import PartidoItem from './ItemPartidos';   

const ListPartidos = (props) => {

    const { data, handleDeputados } = props;

    if (data.length === 0) return <></>;
    return(
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            width: "600px",
        }}>
            {data.map((item) => {
                return(
                    <PartidoItem item={item} handleDeputados={handleDeputados} />
                )
            })}
            <PartidoItem />
        </Box>    
    )
}

export default ListPartidos;