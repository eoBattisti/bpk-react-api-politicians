import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


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
        <Navbar  open={state} onClose={toggleDrawer(false)} toggleDrawer={toggleDrawer} />
        <Typography style={{ textDecoration: "none" }} variant="h4">
          <Link style={{ textDecoration: "none" }}
            to="/">API Deputados
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
