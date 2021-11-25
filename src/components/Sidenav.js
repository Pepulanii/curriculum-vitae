import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCopy,
  faIdBadge,
  faGraduationCap,
  faAddressCard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'nav-text',
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <FontAwesomeIcon icon={faCopy} />,
    cName: 'nav-text',
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <FontAwesomeIcon icon={faIdBadge} />,
    cName: 'nav-text',
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    cName: 'nav-text',
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    cName: 'nav-text',
  },
];

export default SidebarData;
