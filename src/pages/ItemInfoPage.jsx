import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const ItemInfoPage = () => {
  const [deleteRecord, setDeleteRecord] = useState(false);
  const navigate = useNavigate();
  const onSearchProducts = () => {
    navigate("/itemslist");
  };

  const onEditItem = () => {
    navigate("/editcompany");
  };
  const onDeleteItem = () => {
    setDeleteRecord(true);
  };
  const onCancelDelete = () => {
    setDeleteRecord(false);
  };
  return (
    <Card sx={{ minWidth: 275, margin: 4 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Producto
        </Typography>
        <Typography variant="h5" component="div">
          $NOMBRE EMPRESA$
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          $ITEM SKU$
        </Typography>
        <Typography variant="body2">
          $DESCRIPTION$
          <br />
          $QUANTITY$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Editar
        </Button>
        <Button size="small" variant="contained" onClick={() => onDeleteItem()}>
          Eliminar
        </Button>
        <Dialog
          open={deleteRecord}
          onClose={onCancelDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Eliminar definitivamente este item?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              El registro se eliminará definitivamente de la base de datos
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancelDelete}>Cancelar</Button>
            <Button onClick={onCancelDelete} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};
