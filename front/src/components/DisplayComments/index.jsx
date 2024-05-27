import { useState } from 'react';
import { Grid, Paper, Typography, IconButton, TextField} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import { deleteComentById, editComent } from '../../api/routes';

const DisplayComments = ({ comments, setComments}) => {

  const [editComentId, setEditComentId] = useState(null);
  const [editFormData, setEditFormData] = useState({ comentarios: '', gasto: 0 });

  const handleDeleteComent = async (comentId) => {
    try {
      const response = await deleteComentById(comentId);
      if (response.status === 200) {
        setComments((currentComments) => currentComments.filter((comment) => comment._id !== comentId));
      }
    } catch (error) {
      console.log('Error en el handleDeleteComent', error);
    }
  }

  const handleEditClick = (comment) => {
    setEditComentId(comment._id);
    setEditFormData({ comentarios: comment.comentarios, gasto: comment.gasto });
  }

  const handleSaveClick = async () => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === editComentId) {
        return { ...comment, ...editFormData };
      }
      return comment;
    });
    setComments(updatedComments);
    setEditComentId(null);
    
    try {
      const response = await editComent(editComentId, editFormData.comentarios, editFormData.gasto);
      console.log('Response:', response)
      if (response.status === 200) {
        setMessage('Comentario editado');
        setOpen(true);
      }
    } catch (error) {
      console.log('Error en el handleSaveClick', error);
    }
  }

  const style = {
    stylePaper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: 'auto',
      width: '90%',
      padding: '1%',
      margin: 'auto',
      textAlign: 'center',
      marginBottom: '1%',
      wordWrap: 'break-word',
      overflow: 'hidden'
    },
    inputStyle: {
      width: '100%',
      padding: '10px 20px',  
      boxSizing: 'border-box'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '10px'
    }
  };

  return (
    <Grid container spacing={2}>
      {comments.map((comment) => (
        <Grid item xs={12} key={comment._id}>
          <Paper elevation={3} style={style.stylePaper}>
            {
              editComentId === comment._id ? (
                <>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={editFormData.comentarios}
                    onChange={(e) => setEditFormData({ ...editFormData, comentarios: e.target.value })}
                    style={style.inputStyle}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={editFormData.gasto}
                    onChange={(e) => setEditFormData({ ...editFormData, gasto: e.target.value })}
                    style={style.inputStyle}
                  />
                </>
              ) : (
                <>
                  <Typography variant="caption"> Vales y descripcion: </Typography>
                  <Typography variant="h6">{comment.comentarios + ":"}</Typography>
                  <Typography variant="caption"> Gasto: </Typography>
                  <Typography variant="h6">{comment.gasto}</Typography>
                </>
              )
            }
            <Grid item style={style.buttons}>
              {editComentId === comment._id ? (
                <IconButton onClick={handleSaveClick}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => handleEditClick(comment)}>
                  <ModeEditIcon />
                </IconButton>
              )}
              <IconButton onClick={() => handleDeleteComent(comment._id)}>
                <DeleteForeverIcon />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayComments;
