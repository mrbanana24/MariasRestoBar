import axios from 'axios';

// Login user
export const loginUser = async (nombre, password) => {
  try{
    const response = await axios.post('http://localhost:8000/login', {nombre, password});
    return response;
  }catch(error){
    console.log(error);
  }
};

// Post individual data table
export const saveIndividualDataTable = async (numMesa, monto, estadoPago, propina) => {
  try{
    const response = await axios.post('http://localhost:8000/saveIndividualDataTable', {numMesa, monto, estadoPago, propina});
    return response;
  }catch(error){
    console.log(error);
  }
};