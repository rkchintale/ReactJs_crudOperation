import { Button, FormControl, FormGroup, Input, InputLabel,makeStyles, Typography } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { editusers,getusers } from '../Service/api';


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


const EditEmp = () => {
    const [user, setuser] = useState(initialValue);
    const {name,username,mail,mobile,address}=user;
    const {id}=useParams();
    const classes=useStyle();
    const history=useHistory();

    const onValuechange=(e)=>{
        e.persist(); 
        setuser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        getallusers();
    }, [])

    const getallusers=async()=>{
        const result= await getusers(id);
        setuser(result.data);
      }

    const edituser= async()=>{
        await editusers(id,user);
        history.push('/AllEmp')
    }
    return (
        <>
            <FormGroup className={classes.container}>
            <Typography variant="h4">Update Employee</Typography>
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
                <Button variant="contained" color="primary" onClick={()=>edituser()}>Save changes</Button>
                <Button variant="contained" color="secondary" component={Link} to="/" onClick={()=>edituser()}>Cancel</Button>
            </FormGroup>
        </>
    )
}

export default EditEmp


