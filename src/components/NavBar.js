import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from './NotFoundPage';
import Dashboard from './Dashboard';
import Login from './Login';
import Something from './Something';
import Rti from './Rti';
import LogoutIcon from '@material-ui/icons/Input';
import { withRouter ,Redirect} from 'react-router-dom';
import { Link } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: '#08002A',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,  
    padding: theme.spacing.unit * 3,
  },
});

class PermanentDrawerLeft extends React.Component {
  render(){
    const { classes } = this.props;
    // if (this.state.loggedIn) {
    //   return <Redirect to='/' />
    // }
  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DIPP (Super User)
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {
          //   ['Home', 'RTI'].map((text, index) => (
          //   <ListItem button key={ text } onClick={  }>
          //     <ListItemIcon>{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }</ListItemIcon>
          //     <ListItemText primary={text} />
          //   </ListItem>
          // ))
        }
        <ListItem button>
          <ListItemIcon>
          <a href="/ministry/home"><InboxIcon/></a>
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <a href="/rti"><MailIcon/></a>
          </ListItemIcon>
          <ListItemText primary={'RTI'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <a href="/ministry"><LogoutIcon/></a>
          </ListItemIcon>
          <ListItemText primary={'Logout'} />
        </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={ classes.toolbar } />
        <Switch>
          <Route path="/ministry" component={Login} exact />
          <Route path="/rti" component={Rti} exact />
          <Route path="/ministry/home" component={Dashboard} exact />
          <Route path="/ministry/table/:type"  component= {Something} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </div>
    </BrowserRouter>
      );
      }
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);