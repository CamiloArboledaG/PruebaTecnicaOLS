import { makeStyles } from "@material-ui/core"
import fondo from "../assets/images/fondo.jpg"

const Sesion = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{height: "100%"}}>
            <img className={classes.back} src={fondo}></img>
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

