import React from 'react';
import Grid from '@material-ui/core/Grid';

import Pack from './Pack/Pack'
import useStyles from './styles';
import { logger } from 'workbox-core/_private';

const Packages = ({ packages, onAddToCart }) => {
  const classes = useStyles();
  logger.debug(packages)
  if (!packages.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {packages.map((pack) => (
          <Grid item key={pack.id} item xs={12} sm={6} md={4} lg={3}>
            <Pack pack={pack} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Packages;