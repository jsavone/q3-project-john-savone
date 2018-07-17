import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { claimItem } from '../redux/actions'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    maxHeight: 250,
  },
  table: {
  width: '100%',
  },
  logo: {
    marginTop: 6,
  },
  price: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'red',
  },
  claim: {
    marginTop: 20,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class RegistryItem extends Component {

  state = {
  open: false,
  claimOpen: false,
  claimMessage: '',
};

handleClickOpen = () => {
  this.setState({ open: true });
};

handleClickOpenClaim = () => {
  this.setState({ claimOpen: true });
};

handleClose = () => {
  this.setState({ open: false });
};

handleCloseClaim = () => {
  this.setState({ claimOpen: false });
};

handleSubmitClaim = (prod, guest) => {
  this.setState({ claimOpen: false });
  let claimObj = {
    item_id: prod,
    guest_id: guest
  }
  this.props.claimItem(claimObj)
};

render() {
  const { classes } = this.props;

  let thisProduct = {...this.props.products.filter(product => product.id === this.props.item.prod_id)[0]}
  return (
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <p><img className={classes.img} src={thisProduct.img_url} alt={thisProduct.prod_name} /></p>
          <Typography variant="subheading" gutterBottom>
              {thisProduct.prod_name}
          </Typography>
          <Typography variant="title" gutterBottom>
              ${thisProduct.msrp}
          </Typography>

          <div>
           <Button onClick={this.handleClickOpen}>View Description</Button>
           <Dialog
             open={this.state.open}
             TransitionComponent={Transition}
             keepMounted
             onClose={this.handleClose}
             aria-labelledby="alert-dialog-slide-title"
             aria-describedby="alert-dialog-slide-description"
           >
               <DialogTitle id="alert-dialog-slide-title">
                 {thisProduct.prod_name}
               </DialogTitle>
               <DialogContent>
                 <DialogContentText id="alert-dialog-slide-description">
                 {thisProduct.prod_desc}
                 </DialogContentText>
               </DialogContent>
               <DialogActions>
                 <Button onClick={this.handleClose} color="primary">
                   Close
                 </Button>
              </DialogActions>
            </Dialog>
          </div>

            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Store</TableCell>
                    <TableCell numeric>Sale Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>
                      <a href={thisProduct.amazon_prod_url}>
                      <img className={classes.logo} src="../../amazon-logo.png" alt="amazon logo"/>
                      </a>
                    </TableCell>
                    <TableCell numeric>
                      <a href={thisProduct.amazon_prod_url} className={classes.price}>
                      ${thisProduct.amazon_sale_price}
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>
                      <a href={thisProduct.macys_prod_url}>
                      <img className={classes.logo} src="../../macys-logo.png" alt="macys logo"/>
                      </a>
                    </TableCell>
                    <TableCell numeric>
                      <a href={thisProduct.macys_prod_url} className={classes.price}>
                      ${thisProduct.macys_sale_price}
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>
                      <a href={thisProduct.wm_prod_url}>
                      <img className={classes.logo} src="../../walmart-logo.png" alt="walmart logo"/>
                      </a>
                    </TableCell>
                    <TableCell numeric>
                      <a href={thisProduct.wm_prod_url} className={classes.price}>
                      ${thisProduct.wm_sale_price}
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>

            <div>

              <Button onClick={this.handleClickOpenClaim} className={classes.claim}>I Purchased This Product</Button>
              <Dialog
                open={this.state.claimOpen}
                onClose={this.handleCloseClaim}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Claim as Purchased</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Let the registrant know you completed the purchase. This will remove the product from their registry.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="message"
                    label="Send a message to the registrant"
                    type="text"
                    onChange={(e)=>this.setState({claimMessage: e.target.value})}
                    value={this.state.claimMessage}
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>

                  <Button onClick={()=>this.handleSubmitClaim(thisProduct.id, this.props.guest_id)} color="primary">
                    Claim as Purchased
                  </Button>
                </DialogActions>
              </Dialog>

            </div>

          </Paper>
        </Grid>
  )
}
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  claimItem
}, dispatch)

const RegistryItemConnect = connect(mapStateToProps, mapDispatchToProps)(RegistryItem)

export default withStyles(styles)(RegistryItemConnect)
