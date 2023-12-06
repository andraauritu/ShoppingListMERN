import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        position: 'fixed',
    },
    title: {
        flexGrow: 1,
    },
    app: {
        width: '100%',
        color: 'red',
    },
    appBar: {
        width: '100%',
        backgroundColor: '#1563B0',
    },


});

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SL
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                    <Button color="inherit" component={RouterLink} to="/register">Register</Button>
                    <Button color="inherit" component={RouterLink} to="/shoppinglist">List</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
