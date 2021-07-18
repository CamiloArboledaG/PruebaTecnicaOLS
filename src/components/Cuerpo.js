import React, { Suspense, useState } from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Link, useHistory } from "react-router-dom";
import usuarios from '../data';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const Sesion = () => {
    const classes = useStyles();
    const [mail, setMail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    // realizamos un arrow function llamada signin, aquí recibimos e para prevenir que se recargue, hacemos un contador que se usara para mostrar
    // una alerta al usuario por si inicia mal, hacemos un map al arreglo de usuarios que lo importamos del archivo data.js, recorremos el objeto y 
    // verificamos.
    const signin = (e) => {
        e.preventDefault();
        var contador = 0;
        var arreglo = usuarios;
        arreglo.map((usuario) => {
            if (usuario.mail == mail && usuario.contrasena == contrasena) {
                history.push("/usuarios");
            } else {
                contador++;
            }
        })
        if (contador == usuarios.length) {
            window.alert("vuelva a intentarlo");
        }
    }

    return (
        <div className={classes.root} >
            <Grid container spacing={2} alignItems="center" >
                <Grid item xs={10} md={7}>
                    <div className={classes.texto}>
                        <div>
                            <h1 className={classes.textodiv}>Aplicación OLSoftware</h1>
                            <h3 className={classes.textodiv}>Prueba práctica Front-end senior</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={10} md={4}>
                    <div className={classes.margin}>

                        <Typography variant="h5" color="textSecondary">Inicio de sesión</Typography>

                        <div className={classes.field}>
                            <div className={classes.item}>
                                <Grid container spacing={2} alignItems="flex-start" >
                                    <Grid item>
                                        <TextField id="user-button" label="Usuario (email)" value={mail} onChange={e => setMail(e.target.value)} />
                                    </Grid>
                                    <Grid item>
                                        <PermIdentityOutlinedIcon color="disabled" />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.item}>
                                <Grid container spacing={2} alignItems="flex-end" >
                                    <Grid item>
                                        <TextField id="password-button" label="Contraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} />

                                    </Grid>
                                    <Grid item>
                                        <LockOutlinedIcon color="disabled" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        {/* suspense para cuando carga el boton al iniciar sesión */}
                        <Suspense fallback={<h1>CARGANDO...</h1>}>

                        <Button variant="contained" color="primary" className={[classes.item, classes.boton]} onClick={signin} >Iniciar sesión</Button>
                        <Backdrop className={classes.backdrop} open={open}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        </Suspense>

                    </div>
                </Grid>

                <Grid item xs={12} className={classes.Final}>
                    <Typography variant="h7">OLSoftware - 2018</Typography>
                </Grid>
            </Grid>

        </div>
    )
}

export default Sesion

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",

    },
    inicio: {
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
    sesion: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20rem"
    },
    margin: {
        backgroundColor: "white",
        padding: "3rem",
        margin: "1em",
        marginTop: "15em",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "2rem",
        boxShadow: "10px 10px 25px rgba(0, 0, 0, 0.3)",
    },
    item: {
        margin: "0.3rem",

    },
    boton: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    field: {

        boxShadow: "3px 3px 15px rgba(0, 0, 0, 0.1)",
        margin: "1rem",
        border: "2px solid rgba(0, 0, 0, 0.1)",

    },
    texto: {
        color: "white",
        marginLeft: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    textodiv: {
        fontWeight: "normal"
    },
    Final: {
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))


