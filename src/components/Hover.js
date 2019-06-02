import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import hover from '../redux/hoverDuck'

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    position: 'absolute',
    top: '325px',
    left: '20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
  },
});

function Hover() {
  const classes = useStyles();
  const hoverProps = useSelector(state => hover.selectors.getHover(state))

  const { label, value } = hoverProps

  if (!value) {
    return ( <Fragment></Fragment> )
  }
  
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>          
        </Typography>
        <Typography variant="h5" component="h2">
          {value}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {label}
        </Typography>        
      </CardContent>
    </Card>
  );
}

export default Hover;
