import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import usuarios from '../data';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const columns = [
  { id: 'name', label: 'Nombres', minWidth: 170 },
  { id: 'lastname', label: 'Apellidos', minWidth: 170 },
  { id: 'identi', label: 'Identificación (C.C)', minWidth: 100 },
  { id: 'RA', label: 'Rol asociado', minWidth: 100 },
  { id: 'state', label: 'Estado', minWidth: 100 },
  { id: 'phone', label: 'Teléfono', minWidth: 100 },
  { id: 'mail', label: 'Correo electrónico', minWidth: 100 },
  { id: 'action', label: 'Acción', minWidth: 100 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2em",
  },
  existentes: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "white",
    margin: "1em",
    justifyContent: "space-between",
  },
  busqueda: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    margin: "1em",
    marginLeft: "3em",
  },
  root2: {
    width: '100%',
  },
  container: {
    maxHeight: 400,
  },
  fieldmodalcrear: {
    margin: "2rem",
    display: "flex",
  },
  fieldmodalcrear: {
    margin: "1em"
  }
}));


export default function Contenido() {
  const [state, setState] = useState({
    usuarios: usuarios,
    form: {
      id: '',
      name: '',
      lastname: '',
      identi: '',
      RA: '',
      state: '',
      contrasena: '',
      phone: '',
      mail: '',
    }
  })

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChange = (event) => {
    setState({
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      }
    });
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const eliminar = (dato) => {
    var contador = 0;
    var arreglo = state.usuarios;
    arreglo.map((usuario) => {
      if (dato.id == usuario.id) {
        arreglo.splice(contador, 1);
      }
      contador++;
    })
    console.log(arreglo)
    setState({ usuarios: arreglo })
  }

  const inserter = () => {
    var valorNuevo = { ...state.form };
    valorNuevo.id = usuarios.length + 1;
    var lista = usuarios;
    lista.push(valorNuevo);
    setState({ usuarios: lista });
    setOpen(false);
  }
  {/*const crear = (dato) => {
    var contador = 0;
    var arreglo = state.usuarios;
    arreglo.map((usuario) => {
      if (dato.id == usuario.id) {
        arreglo.splice(contador, 1);
      }
      contador++;
    })
  console.log(arreglo)
  setState({ usuarios: arreglo })
}*/}


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} className={classes.existentes} >
          <Grid container spacing={2} >
            <Grid item xs={12} >
              <div className={classes.existentes} >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <GroupIcon style={{ color: '#003cb0', marginLeft: "1em", marginRight: "1em" }} />
                  <Typography variant="h6" noWrap style={{ color: '#003cb0' }}> Usuarios existentes </Typography>
                </div>
                <Button variant="contained" color="primary" style={{ marginLeft: "1em", marginRight: "1em", paddingLeft: "2em", paddingRight: "2em" }} onClick={handleClickOpen}>Crear</Button>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title" style={{ margin: "2em" }}>{"Agregar nuevo usuario"}</DialogTitle>
                  <DialogContent>
                    <form className={classes.modalcrear} noValidate autoComplete="off" style={{ margin: "2em" }}>
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="name" id="name" onChange={handleChange} label="Nombres" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="lastname" id="lastname" onChange={handleChange} label="Apellidos" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="identi" id="identi" onChange={handleChange} label="Identifiación" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="RA" id="RA" onChange={handleChange} label="Rol asociado" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="state" id="state" onChange={handleChange} label="Estado" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="contrasena" id="contrasena" onChange={handleChange} label="Contraseña" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="phone" id="phone" onChange={handleChange} label="Teléfono" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField size="small" name="mail" id="mail" onChange={handleChange} label="Correo electrónico" variant="outlined" className={classes.fieldmodalcrear} />
                        </Grid>
                      </Grid>
                    </form>
                  </DialogContent>
                  <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" color="primary" onClick={() => inserter()} autoFocus style={{ margin: "2em", backgroundColor: "green" }}>
                      Aceptar
                    </Button>
                    <Button variant="outlined" onClick={handleClose} color="primary" style={{ margin: "2em", color: "green", borderColor: "green" }}>
                      Cancelar
                    </Button>
                  </Grid>
                </Dialog>


              </div>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.root2}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table" size="small" padding="none">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody >
                      {
                        usuarios.map(usuario => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={usuario.code}>
                              {columns.map((column) => {
                                const value = usuario[column.id];
                                if (column.id != 'action') {
                                  return (
                                    <TableCell key={column.id} name={column.id} align={column.align}>
                                      {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                  );
                                } else {
                                  return (
                                    <TableCell key={column.id} align={column.align} style={{ display: "flex" }}>
                                      <IconButton>
                                        <EditIcon fontSize="small" style={{ color: '#003cb0' }} onClick={handleClickOpen} />
                                        <Dialog
                                          open={open2}
                                          onClose={handleClose2}
                                          aria-labelledby="alert-dialog-title"
                                          aria-describedby="alert-dialog-description"
                                        >
                                          <DialogTitle id="alert-dialog-title" style={{ margin: "2em" }}>{"Editar Usuario"}</DialogTitle>
                                          <DialogContent>
                                            <form className={classes.modalcrear} noValidate autoComplete="off" style={{ margin: "2em" }}>
                                              <Grid container>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="name" id="name" onChange={handleChange} label="Nombres" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="lastname" id="lastname" onChange={handleChange} label="Apellidos" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="identi" id="identi" onChange={handleChange} label="Identifiación" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="RA" id="RA" onChange={handleChange} label="Rol asociado" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="state" id="state" onChange={handleChange} label="Estado" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="contrasena" id="contrasena" onChange={handleChange} label="Contraseña" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="phone" id="phone" onChange={handleChange} label="Teléfono" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                  <TextField size="small" name="mail" id="mail" onChange={handleChange} label="Correo electrónico" variant="outlined" className={classes.fieldmodalcrear} />
                                                </Grid>
                                              </Grid>
                                            </form>
                                          </DialogContent>
                                          <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Button variant="contained" color="primary" onClick={() => inserter()} autoFocus style={{ margin: "2em", backgroundColor: "green" }}>
                                              Aceptar
                                            </Button>
                                            <Button variant="outlined" onClick={handleClose2} color="primary" style={{ margin: "2em", color: "green", borderColor: "green" }}>
                                              Cancelar
                                            </Button>
                                          </Grid>
                                        </Dialog>


                                      </IconButton>
                                      <IconButton>
                                        <DeleteIcon fontSize="small" onClick={() => eliminar(usuario)} />
                                      </IconButton>
                                    </TableCell>
                                  );
                                }
                              })}
                            </TableRow>
                          );
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={usuarios.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Grid>


        </Grid>
        <Grid item xs={12} md={2} className={classes.busqueda}  >
          <Grid container>

            <Grid item xs={12}>
              <PersonAddIcon style={{ color: '#003cb0', marginLeft: "1em", marginRight: "1em" }} />
              <Typography variant="h7" noWrap style={{ color: '#003cb0' }}> Filtrar búsqueda </Typography>

            </Grid>

            <Grid item xs={12}>
              <form className={classes.modalcrear} noValidate autoComplete="off" style={{ margin: "2em" }}>
                <Grid container>
                  <Grid item xs={12} >
                    <TextField size="small" name="name" id="name" label="Nombres" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField size="small" name="lastname" id="lastname" label="Apellidos" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField size="small" name="identi" id="identi" label="Identificación" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField size="small" name="RA" id="RA" label="Rol asociado" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField size="small" name="state" id="state" label="Estado" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField size="small" name="contrasena" id="contrasena" label="Contraseña" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField size="small" name="phone" id="phone" label="Teléfono" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField size="small" name="mail" id="mail" label="Correo electrónico" variant="outlined" className={classes.fieldmodalcrear} style={{ fontSize: "1px", marginTop: "20em" }} />
                  </Grid>
                </Grid>
              </form>
              <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid item xs={12} md={6}>

                  <Button variant="contained" size="small" color="primary" style={{ backgroundColor: "green" }}>
                    Aceptar
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="outlined" size="small" onClick={handleClose} color="primary" style={{ marginLeft: "5px", color: "green", borderColor: "green" }}>
                    Cancelar
                  </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
