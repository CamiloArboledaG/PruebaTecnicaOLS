import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "flex-end",
      padding: "1em",
    },
  }));

const EndBar = () => {
    const classes = useStyles();
    return (
      //Endbar que se muestra en la sección de usuarios y se ve al final como un credito.
        <div className={classes.root}>
            <Typography variant="h7" style={{ color: "gray", paddingRight: "1em" }}>OLSoftware - 2018</Typography>
        </div>
    )
}

export default EndBar
