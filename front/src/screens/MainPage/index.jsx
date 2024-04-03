import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllTables, getAllComments } from "../../api/routes";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DisplayTables from "../../components/DisplayTables";
import ComentsContainer from "../../components/ComentsContainer";
import DisplayComments from "../../components/DisplayComments";

const MainPage = () => {
  const [allTables, setTables] = useState([]);
  const [allComments, setComments] = useState([]);


  useEffect(() => {
    const fetchTablesAndComments = async () => {
      try {
        const responseTables = await getAllTables();
        const responseComments = await getAllComments();

        // TODO: modularizar esto en una funcion de chequeo de errores
        if (responseTables.status == 200) {
          setTables(responseTables.data.tables);
        }
        if (responseComments.status == 200) {
          setComments(responseComments.data.comments);
        }
        
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTablesAndComments();
  }, []);

  // Esto funciona, porque cuando se actualiza la lista de tables, se vuelve a renderizar el componente DisplayTables
  const addTable = (newTable) => {
    setTables((prevTables) => [...prevTables, newTable]);
  };

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container sx={{ minHeight: "100vh" }}>
        {/* First part of screen*/}
        <Grid item xs={8} sx={{ backgroundColor: "red" }}>
          {/* Tabla para agregar mesas y las mesas listadas */}
          <Table onAddTable={addTable} />
          <DisplayTables tables={allTables} />
        </Grid>
        {/* Second part of screen*/}
        <Grid item xs={4} sx={{ backgroundColor: "green" }}>
          {/* Contenedor de comentarios */}
          <ComentsContainer onAddComment={addComment} />
          <DisplayComments comments={allComments} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
