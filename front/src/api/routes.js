import axios from 'axios';

// Login user
export const loginUser = async (nombre, password) => {
  try{
    const response = await axios.post('http://localhost:8000/login', {nombre, password});
    return response;
  }catch(error){
    throw error;
  }
};

// Post individual data table
export const saveIndividualDataTable = async (numMesa, monto, estadoPago, propina) => {
  try{
    const response = await axios.post('http://localhost:8000/saveIndividualDataTable', {numMesa, monto, estadoPago, propina});
    return response;
  }catch(error){
    throw error;
  }
};

// Get all tables
export const getAllTables = async () => {
  try{
    const response = await axios.get('http://localhost:8000/getAllTables');
    return response;
  }catch(error){
    throw error;
  }
};

// Save coment
export const saveComment = async (fecha, comentarios) => {
  try{
    const response = await axios.post('http://localhost:8000/saveComent', {fecha, comentarios});
    return response;
  }catch(error){
    throw error;
  }
}

// Get all comments
export const getAllComments = async () => {
  try{
    const response = await axios.get('http://localhost:8000/getAllComments');
    return response;
  }catch{
    throw error;
  }
};