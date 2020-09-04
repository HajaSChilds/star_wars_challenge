import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


//TODO: Fetch data from API - pass down as props to events components

//TODO: Create object array of events to pass down as props

//TODO: Create custom layout for Timeline - done

//TODO: Map event array to Timeline - done

//TODO: Map objects to event - done


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    color: 'white',
    backgroundColor: 'black',
    opacity:'0.7',
    fontSize: '0.5em',
    },
  
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function StarTimelineContent(props){

    const classes = useStyles();    

return (
  <Paper elevation={3} className={classes.paper}>
    <h1>{props.title}</h1>
    <h3>{props.date}</h3>
    <p>{props.description}</p>
  </Paper>
);

}