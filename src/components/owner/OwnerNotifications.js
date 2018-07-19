import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteNotification } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    marginTop: 10,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  notif: {
    flex: '0 0 100%',
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    marginBottom: 10,
  },
});

class OwnerNotifications extends React.Component {

  render() {
    const { classes } = this.props;
    let currNotifications = this.props.notifications.filter(notif => notif.notif_reg_id === this.props.registry.id)
    let chipData =  currNotifications.map(notif => {
      return {key: notif.id, label: notif.notif_message}
    })

    return (
      <Paper className={classes.root}>
      <Typography variant="title" className={classes.notif}>Notifications</Typography>
        {chipData.map(data => {
          let avatar = (
                        <Avatar>
                          <NotificationsIcon className={classes.svgIcon} />
                        </Avatar>
                        )
          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              onDelete={()=>this.props.deleteNotification(data.key)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return{
    notifications: state.notifications
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteNotification
}, dispatch)

const OwnerNotificationsConnect = connect(mapStateToProps, mapDispatchToProps)(OwnerNotifications)

export default withStyles(styles)(OwnerNotificationsConnect);
