import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { addusers } from '../Service/api';


const useStyle=makeStyles({
    container:{
        width:'50%',
        textAlign:'center',
        margin:'5% 0 0 25%',
        '& > *':{
          marginTop:20  
        } 
    }
});
const initialValue={
    name:'',
    username:'',
    mail:'',
    mobile:'',
    address:'',
    id:''
}


const AddEmployee = () => {
    const [user, setuser] = useState(initialValue);
    const {name,username,mail,mobile,address}=user;
    const classes=useStyle();
    const history=useHistory();

    const onValuechange=(e)=>{
        e.persist(); 
        setuser({...user, [e.target.name]: e.target.value});
    }

    const adduser= async()=>{
        debugger;
        await addusers(user);
        history.push('/AllEmp')
    }
    return (
        <>
            <FormGroup className={classes.container}>
            <Typography variant="h4">Add Employee</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onValuechange(e)} value={name} name="name"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>onValuechange(e)} value={username} name="username"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>onValuechange(e)} value={mail} name="mail"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Mobile</InputLabel>
                    <Input onChange={(e)=>onValuechange(e)} value={mobile} name="mobile"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e)=>onValuechange(e)} value={address} name="address"/>
                </FormControl>
                <Button variant="contained" color="primary" onClick={()=>adduser()}>Add Employee</Button>
            </FormGroup>
        </>
    )
}

export default AddEmployee


