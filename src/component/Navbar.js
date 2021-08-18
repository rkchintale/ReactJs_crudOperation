import React from 'react'
import AppBar from '@material-ui/core/AppBar';
// import { Toolbar,IconButton,MenuIcon,Typography,Button} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyle=makeStyles({
    header:{
        backgroundColor:'black',
        color:'white'
    },
    link:{
        color:"White",
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})
const Navbar=()=> {
    const classes=useStyle();
    return (
        <>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <NavLink to="/" exact className={classes.link}>Home</NavLink>
                    <NavLink to="/allEmp" exact className={classes.link}>All Employee</NavLink>
                    <NavLink to="/AddEmp" exact className={classes.link}>Add Employee</NavLink>                   
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar