import React from 'react';
import Box from '@material-ui/core/Box';

import PartidoItem from './PartidoItem';

const ListPartidos = (props) => {

    const { data, handleDeputados } = props;

    if (data.length === 0) return <></>;
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
        }}>
            {data.map((item) => {
                return (
                    <PartidoItem item={item} handleDeputados={handleDeputados} />
                )
            })}

        </Box>
    )
}

export default ListPartidos;