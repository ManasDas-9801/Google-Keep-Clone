import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListIcon from '@mui/icons-material/ViewList';
import RefreshIcon from '@mui/icons-material/Refresh';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchBar from './SearchBar';
import Divider from '@mui/material/Divider';
import Notes from './Notes';
const drawerWidth = 240;
document.onload = function() {  
    document.getElementById("bulb").focus();
  }
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
//   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const ListItemStyled = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#feefc3',
    width: '50px',
    borderRadius: '50%',
    // marginLeft:'8px',
    fontSize: '.875rem',
    fontWeight: 500,
    marginBottom: '12px',
    '&:hover, &:focus': {
        width: 'auto',
        bgcolor: 'unset',
        borderRadius: '0px 25px 25px 0px',
        // border:'1px solid black',
        backgroundColor: '#feefc3',
        transition: ' ease',
    },
    '&:after': {
        width: 'auto',
        bgcolor: 'unset',
        borderRadius: '0px 25px 25px 0px',
        // border:'1px solid black',
        backgroundColor: '#feefc3',
        transition: ' ease',
    },
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f1f2f6',
    color: 'black',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        marginLeft: '8%',

    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '46px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} open={open} sx={{ backgroundColor: 'white', borderBottom: '.1px solid #ced2db',height:'65px' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        onDoubleClick={handleDrawerClose}
                        edge="start"

                    >
                        {/* <Avatar sx={{ backgroundColor: '#ecf0f1', width: 56, height: 56, mr: { xs: 1, md: 2 } }} > */}
                        <Tooltip title="Main Menu">
                            <MenuIcon sx={{ color: "#5f6368" }} />
                        </Tooltip>
                        {/* </Avatar> */}
                    </IconButton>
                    <Tooltip title="Keep">
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" sx={{ height: '10px', width: '10px' }} />
                    </Tooltip>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ color: "#5f6368", ml: 1, fontSize: '22px', }}
                    >
                        Keep

                    </Typography>
                    <CssBaseline />
                    <Search sx={{display: { xs: 'none', md: 'flex' }}}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: "#5f6368" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ width: { xs: 'auto', md: '700px' } }}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Refresh">
                                <RefreshIcon sx={{ color: "#5f6368" }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Google List">
                                <ViewListIcon sx={{ color: "#5f6368" }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Setting">
                                <SettingsIcon sx={{ color: "#5f6368", mr: 5 }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Google App" sx={{ p: 2 }}>
                                <AppsIcon sx={{ color: "#5f6368", mr: 2 }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/ADea4I7jV8hsKsX0Ac83ypEhg0glqA2O00kC6h8aYbBF9g=s32-c-mo" />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Refresh">
                                <RefreshIcon sx={{ color: "#5f6368" }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Google List">
                                <ViewListIcon sx={{ color: "#5f6368" }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Setting">
                                <SettingsIcon sx={{ color: "#5f6368",  }} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Tooltip title="Google App" sx={{ p: 2 }}>
                                <AppsIcon sx={{ color: "#5f6368",}} />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            onDoubleClick={handleDrawerClose}
                            edge="end "

                        >
                            <Avatar sx={{ backgroundColor: '#ecf0f1'}} src="https://lh3.googleusercontent.com/ogw/ADea4I7jV8hsKsX0Ac83ypEhg0glqA2O00kC6h8aYbBF9g=s32-c-mo" >

                            </Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
      <Drawer variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseOut={handleDrawerClose} >
                
                <Divider />
                <List sx={{ marginTop: "70px", }}  >
                    <ListItemStyled button sx={{ ml: { md: 1 } }} id="bulb">
                        <ListItemIcon>
                            <LightbulbOutlinedIcon sx={{ fontSize: '1.5rem', marginLeft: '-4px',fill:'black' }} />
                        </ListItemIcon>
                        <ListItemText primary="Notes" > </ListItemText>
                    </ListItemStyled>

                    <ListItem button sx={{ ml: { md: 1 } }}>
                        <ListItemIcon>
                            <NotificationsNoneOutlinedIcon sx={{ fontSize: '1.5rem', marginLeft: '-4px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Reminders" sx={{ fontSize: '1.5rem', fontWeight: 900, }} />
                    </ListItem>

                    <ListItem button sx={{ ml: { md: 1 } }}>
                        <ListItemIcon>
                            <CreateOutlinedIcon sx={{ fontSize: '1.5rem', marginLeft: '-4px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit Lables"> </ListItemText>
                    </ListItem>

                    <ListItem button sx={{ ml: { md: 1 } }}>
                        <ListItemIcon>
                            <ArchiveOutlinedIcon sx={{ fontSize: '1.5rem', marginLeft: '-4px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Archive"> </ListItemText>
                    </ListItem>

                    <ListItem button sx={{ ml: { md: 1 } }}>
                        <ListItemIcon>
                            <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.5rem', marginLeft: '-4px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Move To Bin"> </ListItemText>
                    </ListItem>

                </List>
            </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
         {/* <SearchBar /> */}
         <Notes />
       </Box>
    </Box>
  );
}
