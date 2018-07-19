import React from 'react'
import NavBar from './NavBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const styles = {
  root: {
   flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: '0 auto',
  },
  container: {
    flexGrow: 1,
  },
  grid: {
    paddingTop: 15,
    margin: '0 auto',
    width: '90%',
    textAlign: 'center',
  },
};

const Main = (props) => {

const { classes } = props;

  return(
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <NavBar profile_pic="https://zcoin.io/wp-content/uploads/2017/01/blank-avatar-300x300.png"/>
        <Grid container spacing={24} className={classes.grid}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://apracticalwedding.com/wp-content/uploads/2017/06/cb_dGR_20170221_DrmRgstryHr.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    CREATE YOUR REGISTRY
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" color="primary" className={classes.button} href="/create/reg">
                    CREATE A REGISTRY
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

         <Grid item xs={12} sm={6}>
           <Paper className={classes.paper}>
             <Card className={classes.card}>
               <CardMedia
                 className={classes.media}
                 image="https://myeasternshorewedding.com/wp/wp-content/uploads/2017/07/EasternShoreWedding_2015.jpg"
                 title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                   JOIN AS A REGISTRY GUEST
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="large" color="primary" className={classes.button} href="/join/reg">
                   JOIN AS GUEST
                 </Button>
               </CardActions>
             </Card>
           </Paper>
         </Grid>

         <Grid item xs={12} sm={6}>
           <Paper className={classes.paper}>
             <Card className={classes.card}>
               <CardMedia
                 className={classes.media}
                 image="https://wwcdn3.weddingwire.com/img_g/editorial-images-2018/5-may/kim/t20_wedding-registry-guide-cover.jpg"
                 title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                   LOGIN AS REGISTRY OWNER
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="large" color="primary" className={classes.button} href="/reg/owner/login">
                   OWNER LOGIN
                 </Button>
               </CardActions>
             </Card>
           </Paper>
         </Grid>

         <Grid item xs={12} sm={6}>
           <Paper className={classes.paper}>
             <Card className={classes.card}>
               <CardMedia
                 className={classes.media}
                 image="https://airwavesmusic.ca/wp-content/uploads/2013/11/AirwavesWeddingDJGift2.jpg"
                 title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography gutterBottom variant="headline" component="h2">
                   LOGIN AS REGISTRY GUEST
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="large" color="primary" className={classes.button} href="/reg/guest/login">
                   GUEST LOGIN
                 </Button>
               </CardActions>
             </Card>
           </Paper>
         </Grid>

       </Grid>
     </MuiThemeProvider>
    </div>
  )
}
export default withStyles(styles)(Main);
