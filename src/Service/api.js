import axios from "axios";

const url='http://192.168.199.2:3003/users';

const mainAPI='https://jsonplaceholder.typicode.com/posts';

export const getusers=async (id)=>{
    id=id|| "";
    return await axios.get(`${url}/${id}`);
}

export const addusers=async (user)=>{
    return await axios.post(url,user);
}

export const editusers=async (id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export const deleteusers=async (id)=>{
    return await axios.delete(`${url}/${id}`);
}