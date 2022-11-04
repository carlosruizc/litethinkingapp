import { DataTable } from "../components/DataTable";
import companies from "../data/companies.json";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

export const CompaniesListPage = () => {
  const fields = ["Nombre", "Dirección", "NIT", "Teléfono"];
  const navigate = useNavigate();
  const onNewCompany = () => {
    navigate("/newcompany");
  };
  return (
    <>
      <h2>Listado de Empresas</h2>

      <DataTable fields={fields} data={companies} />
      <Button
        variant="contained"
        size="small"
        component="label"
        sx={{ height: 0.8, margin: 1 }}
        endIcon={<ArrowDropDownIcon />}
      >
        EXPORTAR COMO PDF
        <input hidden accept=".pdf" type="file" />
      </Button>
      <Button
        variant="contained"
        size="small"
        component="label"
        sx={{ height: 0.8, margin: 1 }}
        onClick={onNewCompany}
      >
        CREAR NUEVA EMPRESA
      </Button>
    </>
  );
};
