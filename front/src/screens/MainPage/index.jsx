import LeftDrawer from "../../components/Drawer";
import Table from '../../components/Table';

const MainPage = () => {
  return (
    <>
      <h1>MainPage</h1>
      <LeftDrawer />
      <Table 
        numeroMesa={1}
        monto={100}
        estadoPago={'Pagado'}
        propina={10}
        fechaHora={'10/10/2021'}
      />
      <Table/>
    </>
  );
};

export default MainPage;
