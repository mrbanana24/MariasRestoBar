import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllTables } from "../../api/routes";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DisplayTables from "../../components/DisplayTables";
import ComentsContainer from "../../components/ComentsContainer";

const MainPage = () => {
  const [allTables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await getAllTables();
        if (response.status == 200) {
          setTables(response.data.tables);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTables();
  }, []);

  // Esto funciona, porque cuando se actualiza la lista de tables, se vuelve a renderizar el componente DisplayTables
  const addTable = (newTable) => {
    setTables((prevTables) => [...prevTables, newTable]);
  };

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
          <ComentsContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
