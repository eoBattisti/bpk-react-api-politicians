import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Container } from './style';
export default function Header({ handleSearch }) {

  return (
    <Container>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
        padding: 16,
      }}>
        <Typography style={{ textDecoration: "none" }} variant="h4">
          <Link style={{ textDecoration: "none" }}
            to="/">API Deputados
          </Link>
        </Typography>
        <TextField id="outlined-search" type="search" onChange={(evt) => { handleSearch(evt.target.value) }} label="Pesquise por nome" variant="outlined"></TextField>
      </Box>
    </Container>
  );
}
