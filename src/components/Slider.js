import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'
import { useDispatch, useSelector } from 'react-redux'
import year from '../redux/yearDuck'

const styles = {
  root: {
    width: '90%',
    position: 'absolute',
    top: '10px',
    left: '10px'
  },
  slider: {
    padding: '22px 0px'
  }
}

function StepSlider (props) {
  const yearProps = useSelector(state => year.selectors.getYear(state))
  const dispatch = useDispatch()
  const { classes } = props
  const value = yearProps.year

  return (
    <div className={classes.root}>
      <Slider
        className={classes.slider}
        value={value}
        min={2015}
        max={2100}
        step={1}
        onChange={(event, value) =>
          dispatch(year.actions.changeYear({ year: value }))
        }
      />
    </div>
  )
}

export default withStyles(styles)(StepSlider)
