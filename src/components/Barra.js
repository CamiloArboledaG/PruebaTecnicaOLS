import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import VerticalBar from "./Contenido";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import TuneIcon from '@material-ui/icons/Tune';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MoodIcon from '@material-ui/icons/Mood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 260;
const drawerWidth2 = 73;
const drawerWidth3 = 58;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        height: "5rem",
        display: "flex",
        overflowX: 'hidden',
        width: `calc(100% - ${drawerWidth3}px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth2}px)`,
        },
        justifyContent: "center",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: "none",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        backgroundColor: "blue",
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,

        background: 'linear-gradient(to bottom, #528eff, #22407a)',
        color: 'white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {

        background: 'linear-gradient(to bottom, #528eff, #22407a)',
        color: 'white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },

    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItemText:{
        fontSize:'1.5em',//Insert your required size
      },
      grow: {
        flexGrow: 1,
      },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar style={{ background: '#ffffff' }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        style={{ color: '#003cb0' }}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    <Typography variant="h6" noWrap style={{ color: '#003cb0' }}>
                        Prueba Front-end
                    </Typography>
                    <div className={classes.grow} />
                    <AccountCircleIcon style={{ color: 'black', marginLeft: "1em" }} fontSize="large" />
                    <Typography variant="h7" noWrap style={{ color: 'black',marginLeft: "1em", marginRight: "2em" }}>
                    Andrés Felipe Garcia Castro
                    </Typography>
                    <IconButton>
                    <ExitToAppIcon style={{ color: '#003cb0' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                style={{ background: '#003cb0' }}
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}

                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}

            >
                <List>
                    <ListItem button key={"OLSoftware"}>
                        <ListItemIcon><MoodIcon style={{ color: '#ffffff' }}/></ListItemIcon>
                        <ListItemText primary={"OLSoftware"} classes={{primary:classes.listItemText}} />
                        <ListItemIcon><IconButton onClick={handleDrawerClose} style={{ color: '#ffffff' }}>
                            <ChevronLeftIcon />
                        </IconButton></ListItemIcon >
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button key={"Programación"}>
                        <ListItemIcon><MapIcon style={{ color: '#ffffff' }} /></ListItemIcon>
                        <ListItemText primary={"Programación"} />
                    </ListItem>
                    <ListItem button key={"Gestión de operaciones"}>
                        <ListItemIcon><ListIcon style={{ color: '#ffffff' }} /></ListItemIcon>
                        <ListItemText primary={"Gestión de operaciones"} />
                    </ListItem>
                    <ListItem button key={"Perfiles"}>
                        <ListItemIcon><TuneIcon style={{ color: '#ffffff' }} /></ListItemIcon>
                        <ListItemText primary={"Perfiles"} />
                    </ListItem>
                    <ListItem button key={"Roles"}>
                        <ListItemIcon style={{ paddingLeft: "5px", color: '#ffffff' }}><Typography>R</Typography></ListItemIcon>
                        <ListItemText primary={"Roles"} />
                    </ListItem>
                    <ListItem button key={"Usuario"}>
                        <ListItemIcon style={{ paddingLeft: "5px", color: '#ffffff' }}><Typography>U</Typography></ListItemIcon>
                        <ListItemText primary={"Usuario"} />
                    </ListItem>
                    <ListItem button key={"Reportes"}>
                        <ListItemIcon><InsertDriveFileIcon style={{ color: '#ffffff' }} /></ListItemIcon>
                        <ListItemText primary={"Reportes"} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <VerticalBar/>
            </main>
        </div>
    );
}


