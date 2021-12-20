import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
const NavItem = ({ linkTo, description, icon }) => {
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', width: 250 }}>
            <Fragment>{icon}</Fragment>
            <Link to={linkTo}>
                <Typography variant="h6" style={{ textAlign: "center", color: "#FB3640" }} >{description}</Typography>
            </Link>
        </Box>
    )
}

export default NavItem;