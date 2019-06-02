import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'

import year from '../redux/yearDuck'

const styles = {
  root: {
    position: 'absolute',
    top: '50px',
    left: '20px'
  }
}

function Year (props) {
  const yearProps = useSelector(state => year.selectors.getYear(state))
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant='h2'>{yearProps.year}</Typography>
    </div>
  )
}

export default withStyles(styles)(Year)
