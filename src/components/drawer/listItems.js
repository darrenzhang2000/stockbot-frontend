import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';

export const mainListItems = (
    <div>
        <Link to='/'>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
            </ListItem>
        </Link>

        <Link to='/transactionsPage'>
            <ListItem button>
                <ListItemIcon>
                    <CompareArrowsIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions Page" />
            </ListItem>
        </Link>

        <Link to='/stockPage'>
            <ListItem button>
                <ListItemIcon>
                    <ShowChartIcon />
                </ListItemIcon>
                <ListItemText primary="Stock Page" />
            </ListItem>
        </Link>

        <Link to='/portfolioPage'>
            <ListItem button>
                <ListItemIcon>
                    <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="Portfolio Page" />
            </ListItem>
        </Link>

        <Link to='/signup'>
            <ListItem button>
                <ListItemIcon>
                    <PersonAddAlt1Icon />
                </ListItemIcon>
                <ListItemText primary="Sign Up" />
            </ListItem>
        </Link>

        <Link to='/signin'>
            <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In" />
            </ListItem>
        </Link>

    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
