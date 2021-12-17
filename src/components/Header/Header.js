import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import { Container } from './style';
import ListPartidos from '../ListaPartidos/index';

export default function Header({ partidos, handleDeputados }) {

  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  }

  return (
    <Container>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        width: "80%",
        padding: 16,
        margin: "0 auto",
      }}>
        <Button onClick={toggleDrawer(true)} >
          <ListIcon fontSize="large"></ListIcon>
        </Button>
        <Drawer
          anchor={'bottom'}
          open={state}
          onClose={toggleDrawer(false)}
          style={{}}
        >
          <Box style={{ height: 250, display: "flex", padding: 6, background: "#212227" }}>
            <Box style={{ margin: "0 auto" }}>
              <Typography variant="h6" style={{ textAlign: "center", color: "#FB3640" }} >Selecione um partido</Typography>
              <ListPartidos data={partidos} handleDeputados={handleDeputados} />
            </Box>
          </Box>
        </Drawer>
        <Typography style={{ textDecoration: "none" }} variant="h4">
          <Link style={{ textDecoration: "none" }}
            to="/">API Deputados
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
