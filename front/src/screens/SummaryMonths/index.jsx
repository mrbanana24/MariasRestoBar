import Header from '../../components/Header'
import CollapseTable from '../../components/CollapseTable'
import { Grid } from '@mui/material';

const SummaryMonths = () => {
    return(
        <Grid container sx={{ minHeight: "100vh" }}>
            <Header/>
            <CollapseTable/>
        </Grid>       
    )
}

export default SummaryMonths;