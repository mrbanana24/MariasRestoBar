import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getTablesByDate, getCommentsByDate } from "../../api/routes";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DisplayTables from "../../components/DisplayTables";
import ComentsContainer from "../../components/ComentsContainer";
import DisplayComments from "../../components/DisplayComments";
import CardCaja from "../../components/CardCaja";

const MainPage = () => {
  const [allTables, setTables] = useState([]);
  const [allComments, setComments] = useState([]);

  // date = today
  const date = new Date();
  const today = date.toISOString().split("T")[0];

  useEffect(() => {
    const fetchTablesAndComments = async () => {
      try {
        const responseComments = await getCommentsByDate(today);
        const responseTables = await getTablesByDate(today);
        
        if (responseTables.status == 200) {
          setTables(responseTables.data.tables);
        }
        if (responseComments.status == 200) {
          setComments(responseComments.data.coments);
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
        <Grid item xs={8}>
          {/* Tabla para agregar mesas y las mesas listadas */}
          <Table onAddTable={addTable} today={today}/>
          <DisplayTables tables={allTables} setTables={setTables} />
        </Grid>

        {/* Second part of screen*/}
        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
          <CardCaja />
          <ComentsContainer onAddComment={addComment} today={today}/>
          <DisplayComments comments={allComments} setComments={setComments} />
        </Grid>

      </Grid>
    </Box>
  );
};

export default MainPage;
