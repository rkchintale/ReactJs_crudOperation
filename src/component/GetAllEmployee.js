import { Button, Table, TableBody, TableCell, TableHead, TableRow,makeStyles } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteusers, getusers } from '../Service/api'


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    button:{
        marginRight:3,
        marginLeft:3
    }
})
const GetAllEmployee = () => {

    const [users, setusers] = useState([])

    const getallusers=async()=>{
      const result= await getusers();
      setusers(result.data);
    }

    const deleteEmp=async (id)=>{
        await deleteusers(id);
        getallusers();
    }

    useEffect(() => {
        getallusers();
    }, [])
    const classes=useStyles(); 
    return (
        <div>
            <h2>Get all Employee</h2>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Mail</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user=>(
                            <TableRow className={classes.row}>
                                 <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.mail}</TableCell>
                                <TableCell>{user.mobile}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>
                                    <Button className={classes.button} variant="contained" component={Link} 
                                    color="primary" to={`./editemp/${user.id}`}>Edit</Button> 
                                    <Button className={classes.button} variant="contained" 
                                    color="secondary" onClick={()=>deleteEmp(user.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default GetAllEmployee
