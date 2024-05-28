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
// /-------------------------------------/ ROUTES TABLES /-------------------------------------/
// Post individual data table
export const saveIndividualDataTable = async (numMesa, monto, estadoPago, propina, fecha) => {
  try{
    const response = await axios.post('http://localhost:8000/saveIndividualDataTable', {numMesa, monto, estadoPago, propina, fecha});
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

// Get tables by date
export const getTablesByDate = async (date) => {
  try{
    const response = await axios.post('http://localhost:8000/getTablesByDate', {date});
    return response;
  }catch(error){
    throw error;
  }
};


// Delete table by id
export const deleteTable = async (tableId) => {
  try{
    const response = await axios.post('http://localhost:8000/deleteTable', {tableId});
    return response;
  } catch (error){
    throw error;
  }
}

// Edit table by id
export const editTable = async (tableId, numMesa, monto, estadoPago, propina) => {
  try{
    const response = await axios.post('http://localhost:8000/editTable', {tableId, numMesa, monto, estadoPago, propina});
    return response;
  } catch (error){
    throw error;
  }
}

// Get summary day by date
export const summaryDayByDate = async (date) => {
  try{
    const response = await axios.post('http://localhost:8000/getSummaryDayByDate', {date});
    return response;
  } catch (error){
    throw error;
  }
}

// /-------------------------------------///////////////-------------------------------------/



// /-------------------------------------/ ROUTES COMMENTS /-------------------------------------/
// Save coment
export const saveComment = async (fecha, comentarios, gasto) => {
  try{
    const response = await axios.post('http://localhost:8000/saveComent', {fecha, comentarios, gasto});
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
  }catch(error){
    throw error;
  }
};

// Get commets by date
export const getCommentsByDate = async (date) => {
  try{
    const response = await axios.post('http://localhost:8000/getCommentsByDate', {date});
    return response;
  }catch(error){
    throw error;
  }
};

// Delete comment by id
export const deleteComentById = async (commentId) => {
  try{
    const response = await axios.post('http://localhost:8000/deleteComment', {commentId});
    return response;
  } catch (error){
    throw error;
  }
}

// Edit comment by id
export const editComent = async (commentId, comentarios, gasto) => {
  try{
    const response = await axios.post('http://localhost:8000/editComment', {commentId, comentarios, gasto});
    return response;
  } catch (error){
    throw error;
  }
}

// /-------------------------------------///////////////-------------------------------------/

// /-------------------------------------/ ROUTES CAJA /-------------------------------------/
// Save caja
export const saveCaja = async (montoCaja) => {
  try{
    const response = await axios.post('http://localhost:8000/saveCaja', {montoCaja});
    return response;
  }catch(error){
    throw error;
  }
}

// Get caja value
export const getCajaValue = async () => {
  try{
    const response = await axios.get('http://localhost:8000/getCajaValue');
    return response;
  }catch(error){
    throw error;
  }
};