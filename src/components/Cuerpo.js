import { Button, makeStyles, Typography } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const Sesion = () => {
    const classes = useStyles();
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
                                        <TextField id="user-button" label="Usuario" />
                                    </Grid>
                                    <Grid item>
                                        <PermIdentityOutlinedIcon color="disabled" />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.item}>
                                <Grid container spacing={2} alignItems="flex-end" >
                                    <Grid item>
                                        <TextField id="password-button" label="Contraseña" />
                                    </Grid>
                                    <Grid item>
                                        <LockOutlinedIcon color="disabled" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>


                        <Button variant="contained" color="primary" className={[classes.item, classes.boton]}>Iniciar sesión</Button>
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
    }
}))
