import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NavBar from './NavBar'


const styles = theme => ({
  container: {
    display: 'in-line',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: 1000,
  },
  button: {
    marginTop: 15,
  },
  heading: {
    marginTop: 15,
  },
});


class OwnerLogin extends React.Component {
  state = {
    user_name: '',
    pw: '',
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar />

        <Typography variant="display1" className={classes.heading} gutterBottom>
         Registry Owner Login
       </Typography>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="username"
            label="Username"
            className={classes.textField}
            value={this.state.user_name}
            onChange={(e)=>this.setState({user_name: e.target.value})}
            margin="normal"
          />

          <TextField
            required
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            value={this.state.pw}
            onChange={(e)=>this.setState({pw: e.target.value})}
            margin="normal"
          />
        </form>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={()=>this.props.createRegistry(this.state)}
        href={"/reg/owner/"+this.state.user_name}>
          Registry Owner Login
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(OwnerLogin);
