import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import OwnerAddItem from './OwnerAddItem'
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

const OwnerAddList = (props) => {

  const { classes } = props;

  let currIds = props.items.filter(item => item.reg_id === props.registry.id).map(item => item.prod_id)

  let allProducts = props.products.map(item =>  {
    if (currIds.includes(item.id)) {
      return null
    }else{
    return <OwnerAddItem key={item.id} item={item} registry={props.registry} guest_id={0}/>
    }
  })

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <Typography variant="display1" className={classes.heading} gutterBottom>
       Add Items to your Registry
     </Typography>

      <Grid container spacing={24}>
        {allProducts}
      </Grid>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    products: state.products
  }
}

const OwnerAddListConnect = connect(mapStateToProps)(OwnerAddList)

export default withStyles(styles)(OwnerAddListConnect)
