import { DataTable } from "../components/DataTable";
import inventory from "../data/inventory.json";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const ItemsListPage = () => {
  const fields = ["SKU", "Descripción", "Cantidad"];
  const navigate = useNavigate();
  const onNewItem = () => {
    navigate("/newitem");
  };
  return (
    <>
      <h2>Inventario de Productos Empresa $name$</h2>
      <DataTable fields={fields} data={inventory} />
      <Button
        variant="contained"
        size="small"
        component="label"
        sx={{ height: 0.8, margin: 1 }}
        onClick={onNewItem}
      >
        CREAR NUEVO PRODUCTO
      </Button>
    </>
  );
};
