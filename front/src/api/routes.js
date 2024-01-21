import axios from 'axios';

const loginUser = async (password) => {
  try{
    const response = await axios.post('http://localhost:8000/login', {password});
    return response;
  }catch(error){
    console.log(error);
  }

};

export default loginUser;