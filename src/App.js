import React, { useState, useEffect } from 'react';

import './App.scss';
import StarTimelineContent from './components/StarTimelineContent';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core';


/* Star Wars API */
const SWAPI = "https://swapi.dev/api/films/"; 


/* Material UI Loading Bar Theme */
const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function App() {

  /*Hooks */
  const [data, setData] = useState({ events: [] });        // Sets Star Wars Data
  const [loading, setStatus] = useState({loading: true});  // Sets Loading Navigation
  const classes = useStyles();                             // Sets Styles for Loading Navigation
  
  useEffect(() => {

    const controller = new AbortController();
    const options = {
      method: 'GET',
      signal: controller.signal,
    } 

    const timeoutId = setTimeout(() => controller.abort(), 10000); //Set timeout for fetch

    fetch(SWAPI, options)
      .then(res => res.json()) 
      .then(data => { 
        setData(data.results); 
        setStatus(false); // Sets loading status to false when data loads
      })
      .catch(error => console.error(error, 'Timeout exceeded, unable to fetch movie data'))
  }, []) // useEffect only runs once with empty bracket second argument

  const events2 = [
    {
      release_date: '1977-05-25',
      opening_crawl:
        'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
      title: 'Cairo, Egypt',
      buttonText: 'Click Me',
      onClick: console.log,
    },
    {
      release_date: '1977-05-25',
      opening_crawl:
        'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
      title: 'Venice, Italy',
      buttonText: 'Click Me',
      onClick: console.log,
    },
  ]; //sample data

  function showMovies() {
    return data.map((event) => {
      return <StarTimelineContent key={event.title} title={event.title} date={event.release_date} description={event.opening_crawl} />
    })

  }

  function mapTimeline() {
    const movieMap = showMovies();
      return movieMap.map((content) => {
        return <TimelineItem key={content.key} >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{content}</TimelineContent>
            </TimelineItem>
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>STAR WARS</h1>
          <a href="https://github.com/HajaSChilds/star_wars_challenge">
            <h2>Movie Release Timeline</h2>
          </a>
        </div>
        <div className="timeline-container">
          {loading ? (
            <div className={classes.root}>
              <LinearProgress />
              <LinearProgress />
            </div>
          ) : (
            <Timeline align="alternate">{mapTimeline()}</Timeline>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
