import axios from 'axios';

export const loginUser = async (nombre, password) => {
  try{
    const response = await axios.post('http://localhost:8000/login', {nombre, password});
    return response;
  }catch(error){
    console.log(error);
  }
};