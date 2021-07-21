import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        padding: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    overlay: {
        top: '-531px',
        width: '100 %',
        height: '532px',
        position: 'relative',
        background: '#000000a8',
        textAlign: 'center',
    },
    a: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export default useStyles;