import React, { Component } from 'react';
import SidebarData from './SidebarData';
// import { HashLink as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TemporaryDrawer from './Sidebar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            {/* <Toolbar> */}

            <ul>
              <li className="left hide-on-large-only">
                <TemporaryDrawer />
              </li>
              <li>
                <Link to="/" className="brand-logo">
                  CV
                </Link>
              </li>
            </ul>

            <ul className="right hide-on-med-and-down">
              {SidebarData.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                    {item.icon} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FontAwesomeIcon icon={faCopy} /> Skills
          </Link>
        </li>
        <li>
          <Link to="/experience">
            <FontAwesomeIcon icon={faIdBadge} /> Experience
          </Link>
        </li>
        <li>
          <Link to="/education">
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faAddressCard} /> Portfolio
          </Link>
        </li>
      </ul> */}
      {/* <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a> */}
      {/* <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faCopy} /> Skills
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faIdBadge} /> Experience
            </Link>
          </li>
          <li>
            <Link to="/education">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FontAwesomeIcon icon={faAddressCard} /> Portfolio
            </Link>
          </li>
        </ul> */}
    </>
  );
}

export default Navbar;
