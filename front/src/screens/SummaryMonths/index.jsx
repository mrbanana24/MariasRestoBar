import React, { useState, useEffect } from 'react'
import { getSummaryMonthData } from "../../api/routes";
import CollapseTable from '../../components/CollapseTable'
import Header from '../../components/Header'
import { Grid } from '@mui/material';


const SummaryMonths = () => {
    const [summaryMonthData, setSummaryMonthData] = useState()

    useEffect(()=> {
        const fetchSummaryMonthData = async () => {
            try {
                const response = await getSummaryMonthData()
                if (response.status === 200) {
                    setSummaryMonthData(response.data)
                }
            } catch (error) {
                console.log("Error:", error);
            }
        }
        fetchSummaryMonthData()
    }, [])

    return(
        <Grid container sx={{ minHeight: "100vh" }}>
            <Header/>
            <CollapseTable data={summaryMonthData} />
        </Grid>       
    )
}

export default SummaryMonths;