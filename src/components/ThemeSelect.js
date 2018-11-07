import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem, withStyles } from '@material-ui/core';

function ThemeSelect(props) {

    const { classes, theme, handleThemeChange } = props;

    return (
        <FormControl className={classes.formControl}>
            <Select
                value={theme}
                onChange={handleThemeChange}
                inputProps={{ name: 'theme' }}
            >
                <MenuItem value={'cidermaker'}>Cidermaker</MenuItem>
                <MenuItem value={'brewmaster'}>Brewmaster</MenuItem>
            </Select>
        </FormControl>
    );

}

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        marginRight: 20
    },
});

ThemeSelect.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(ThemeSelect);
