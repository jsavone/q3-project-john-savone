import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createRegistry } from '../redux/actions'
import NavBar from './NavBar'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  menu: {
    width: 1000,
  },
});

const regTypes = [
  {
    value: 'wedding',
    label: 'Wedding',
  },
  {
    value: 'baby',
    label: 'Baby',
  },

];

class CreateReg extends React.Component {
  state = {
    user_name: '',
    pw: '',
    reg_type: 'wedding',
    first_name: '',
    last_name: '',
    description: ''
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar />
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

          <TextField
            required
            id="first-name"
            label="First Name"
            className={classes.textField}
            value={this.state.first_name}
            onChange={(e)=>this.setState({first_name: e.target.value})}
            margin="normal"
          />

          <TextField
            required
            id="last-name"
            label="Last Name"
            className={classes.textField}
            value={this.state.last_name}
            onChange={(e)=>this.setState({last_name: e.target.value})}
            margin="normal"
          />

          <TextField
            id="multiline-flexible"
            label="Message for your friends and family"
            multiline
            rowsMax="4"
            value={this.state.description}
            onChange={(e)=>this.setState({description: e.target.value})}
            className={classes.textField}
            margin="normal"
          />

          <TextField
           id="select-reg-type"
           select
           label="Select"
           className={classes.textField}
           value={this.state.reg_type}
           onChange={(e)=>this.setState({reg_type: e.target.value})}
           SelectProps={{
             MenuProps: {
               className: classes.menu,
             },
           }}
           helperText="Please select your registry type"
           margin="normal"
         >
           {regTypes.map(option => (
             <MenuItem key={option.value} value={option.value}>
               {option.label}
             </MenuItem>
           ))}
         </TextField>
        </form>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={()=>this.props.createRegistry(this.state)}
        href={"/reg/owner/"+this.state.user_name}>
          Create Registry
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createRegistry
}, dispatch)

const CreateRegConnect = connect(null, mapDispatchToProps)(CreateReg)

export default withStyles(styles)(CreateRegConnect);
