import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from './sections/header';
import Summary from './sections/summary';
import Experience from './sections/experience';
import Aptitudes from './sections/aptitudes';
import Languages from './sections/languages';
import Skills from './sections/skills';
import Footer from './sections/footer';
import Certifications from './sections/certifications';
import Contact from './sections/contact';

const useStyles = makeStyles(theme => theme.cover);

function Cover() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12}>          

          <Grid container>
            <Grid item sm={7} xs={12}>          
              <Header />
            </Grid>
            <Grid item sm={5} xs={12}>          
              <Contact />
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <Summary />
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Experience/>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Aptitudes />
          <Languages />
          <Skills />
          <Certifications/>
        </Grid>
        <Grid item md={8} sm={8} xs={12}>          
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>    
    </Paper>
  );
}

export default Cover;
