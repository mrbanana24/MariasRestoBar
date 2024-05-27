import Header from '../../components/Header'
import SalesSummaryTable from '../../components/SalesSummaryTable';
import { Box } from "@mui/material";


const SummaryDays = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header /> 
            <SalesSummaryTable />
        </Box>
      );
}

export default SummaryDays;