import { makeStyles } from '@material-ui/core'
import React from 'react'
import notfound from '../assets/img/404 Not found.png'
const useStyle=makeStyles({

    img:{
        margin:'10px'
    }
})
function Notfound() {
    const classes=useStyle();
    return (
        <div>
            <img src={notfound} className={classes.img} width="400" height="200"/>
            <h2>Back to Home page <a href="/">click here</a></h2>
        </div>
    )
}

export default Notfound
