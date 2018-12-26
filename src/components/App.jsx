import React from 'react';
import Grid from '@material-ui/core/Grid';
import Home from './Home';
import Projects from './Projects';
import Work from './Work';
import Nav from './Nav';

function App() {
  const sections = [Home, Projects, Work];
  const sectionStyle = {
    padding: '50px',
    height: '100vh'
  };
  return (
    <div className="App">
      <Nav sections={sections} />
      <Grid container spacing={0}>
        <Grid id='Home' style={sectionStyle} item xs={12}><Home /></Grid>
        <Grid id='Projects' style={sectionStyle} item xs={12}><Projects /></Grid>
        <Grid id='Work' style={sectionStyle} item xs={12}><Work /></Grid>
      </Grid>
    </div>
  );
}

export default App;
