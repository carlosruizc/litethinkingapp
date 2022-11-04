import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const NewItemPage = () => {
  const navigate = useNavigate();

  const onSave = () => {
    navigate("/itemslist", { replace: true });
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
          Crear nuevo producto
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="sku"
            label="SKU"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Descripción"
            name="description"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="quantity"
            label="Cantidad"
            name="quantity"
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
