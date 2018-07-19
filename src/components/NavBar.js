import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  flex: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: '#EEEEEE',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  logo: {
    marginTop: 6,
    height: 60,
  },
};

class NavBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.menu}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              <a href="/" className={classes.navLink}><img src="../../registree-logo.png" className={classes.logo} alt="Registree Logo"/></a>
            </Typography>
              <div>
                <Avatar
                alt="Avatar"
                src={this.props.profile_pic}
                className={classNames(classes.bigAvatar)}
                />
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registries: state.registries,
    products: state.products,
    notification: state.notifications
  }
}

let NavConnect = connect(mapStateToProps)(NavBar)

export default withStyles(styles)(NavConnect);
