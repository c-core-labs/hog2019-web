import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch, useSelector } from 'react-redux'

import layer from '../redux/layerDuck'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'absolute',
    left: '20px',
    top: '100px'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function RadioButtonsGroup() {
  const layerProps = useSelector(state => layer.selectors.getLayer(state))
  const dispatch = useDispatch()
  const classes = useStyles();

  function handleChange(event) {
    dispatch(layer.actions.changeLayer({ layer: event.target.value }))
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="Layers"
          name="layers"
          className={classes.group}
          value={layerProps.layer}
          onChange={handleChange}
        >
          <FormControlLabel value="wind-potential" control={<Radio />} label="Wind potential" />
          <FormControlLabel value="solar-potential" control={<Radio />} label="Solar potential" />
          <FormControlLabel value="mean-cloud" control={<Radio />} label="Mean cloud cover" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioButtonsGroup;
