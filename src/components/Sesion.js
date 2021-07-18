import React, { Suspense, lazy } from 'react';
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import fondo from "../assets/images/fondo.jpg"

const Sesion = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ height: "100%" }}>
            {/* hacemos un suspense para cuando se demora en cargar la página */}
            <Suspense fallback={
                <Backdrop className={classes.backdrop} open="true">
                    <CircularProgress color="inherit" />
                </Backdrop>
            }>
                <img className={classes.back} src={fondo}></img>
            </Suspense>
            {children}
        </div>
    )
}

export default Sesion

const useStyles = makeStyles((theme) => ({
    root: {
    },
    back: {
        height: "37rem",
        borderBottomLeftRadius: "40rem",
        borderBottomRightRadius: "50rem",
        opacity: "0.8",
        position: "absolute",
    }
}))

