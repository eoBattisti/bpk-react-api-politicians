import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import PersonOutlineTwoTone  from '@material-ui/icons/PersonOutlineTwoTone';
import BookmarkTwoTone from '@material-ui/icons/BookmarkTwoTone'; 
import HistoryTwoTone  from '@material-ui/icons/HistoryTwoTone';
import SpeakerNotesTwoTone from '@material-ui/icons/SpeakerNotesOffTwoTone';
import CheckBoxTwoTone from '@material-ui/icons/CheckBoxTwoTone';
import HomeTwoTone  from '@material-ui/icons/HomeTwoTone';
import InfoTwoTone from '@material-ui/icons/InfoTwoTone';

import NavItem from './NavItem';

const Navbar = ({open, toggleDrawer, onClose}) => {

    return(
        <Drawer
        anchor='left'
        open={open}
        onClose={onClose}

        >
            <Box style={{ height: "auto", width: "100%", display: "flex", flexDirection: "column", padding: 6, background: "#212227" }}>
                <NavItem linkTo={`/deputados`} description="Deputados" icon={<PersonOutlineTwoTone fontSize='large'/>} />
                <NavItem linkTo={`/partidos`} description="Partidos" icon={<BookmarkTwoTone fontSize='large'/>} />
                <NavItem linkTo={`/eventos`} description="Eventos" icon={<HistoryTwoTone fontSize='large'/>} />
                <NavItem linkTo={`/proposicoes`} description="Proposições" icon={<SpeakerNotesTwoTone fontSize='large'/>} />
                <NavItem linkTo={`/votacoes`} description="Votações" icon={<CheckBoxTwoTone fontSize='large'/>} />
                <NavItem linkTo={`/orgaos`} description="Orgãos" icon={<HomeTwoTone fontSize='large'/>} /> 
                <NavItem linkTo={`/sobre`} description="Sobre" icon={<InfoTwoTone fontSize='large'/>} />
            </Box>
        </Drawer>
    )
}

export default Navbar;