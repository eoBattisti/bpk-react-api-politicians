import React from 'react';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const Caroussel = (props) =>{
    
    const { item } = props;
    console.log("Mandando do carrossel", item);
    {
        return( 
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center",
                                                   alignItems: "center"}}>
                {item.map(partido => {
                    return(
                        <Box component="div" 
                             sx={{ minWidth: 200, 
                                   width: 150, 
                                   height: 150, 
                                   textAlign: "center"}}>
                            <Box  key={partido.id}>
                                <Box>
                                    <Typography variant='body'>{partido.nome}</Typography>
                                    <Typography variant='body2'>{partido.sigla}</Typography>
                                </Box>
                                <Box>
                                    <Button>Click here</Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>);
    }
   
};
export default Caroussel;