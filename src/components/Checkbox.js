import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const CheckboxesGroup = ({ label, label2, label3, label4, icon }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
        ant: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine, ant } = state;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} icon={icon} onChange={handleChange} name="gilad" />}
                        label={label}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} icon={icon} onChange={handleChange} name="jason" />}
                        label={label2}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} icon={icon} onChange={handleChange} name="antoine" />}
                        label={label3}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={ant} icon={icon} onChange={handleChange} name="ant" />}
                        label={label4}
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}

export default CheckboxesGroup;
