import { useEffect, useState } from 'react';
import CardSummaryDays from '../../components/CardSummaryDays';
import CardSummaryDaysVales from '../../components/CardSummaryDaysVales';
import Header from '../../components/Header'
import { Box, Grid } from "@mui/material";

import {summaryDayByDate, getCommentsByDate} from '../../api/routes';

const SummaryDays = () => {
    const [data, setData] = useState(null);
    const [dataVales, setDataVales] = useState([]);

    // date = today
    const date = new Date();
    const today = date.toISOString().split("T")[0];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await summaryDayByDate(today);
                if(response.status === 200) {
                    setData(response.data);
                }
            }
            catch (error) {
                console.error(error);
            }
        }

        const fetchDataVales = async () => {
            try {
                const response = await getCommentsByDate(today);
                if(response.status === 200) {
                    setDataVales(response.data.coments);
                }
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchData();
        fetchDataVales();
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Grid container sx={{ minHeight: "100vh" }}>
                <CardSummaryDays data={data}/>
                <CardSummaryDaysVales data={dataVales}/>
            </Grid>
        </Box>
      );
}

export default SummaryDays;