import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FirebaseAuth } from "../../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const { email, password, onInputChange } = useForm({
    email: "admin@mail.com",
    password: "123456",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const onLogin = () => {
    login("Nombre Usuario");
    navigate("/companies", { replace: true });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login(email);
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de sesión
        </Typography>

        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            value={email}
            onChange={onInputChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container direction="row" justifyContent="end">
            <Link href="/register" variant="body2">
              {"¿No tiene cuenta? Regístrese"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
