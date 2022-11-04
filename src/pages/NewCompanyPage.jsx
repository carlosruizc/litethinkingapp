import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const NewCompanyPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onSave = () => {
    navigate("/companies", { replace: true });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <SaveAltOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear nueva empresa
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Dirección"
            name="address"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="NIT"
            name="id"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Teléfono"
            name="phone"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onSave}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
