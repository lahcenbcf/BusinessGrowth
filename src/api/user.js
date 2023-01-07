import axios from 'axios'
const url="http://localhost:4000/users"
export const fetchAllusers=async()=>{
    return await axios.get(url)
}
export const createUser=async(user)=>{
    await axios.post(`${url}/create`,user)
}


export const checkUser=async(user)=>{
    const res=await axios.post(`${url}/verify`,user)
    return res
}
export const getOneUser=async(data)=>{
        const res= await axios.post(`${url}/getOneUser`,data)
        return res
}
export const updateUser=async(data)=>{
    await axios.patch(`${url}/update`,data)
}