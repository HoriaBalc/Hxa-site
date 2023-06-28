import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useNavigate} from 'react-router-dom';
import { height } from '@mui/system';
import DropdownButton from '../dropdown';
import * as routes from '../../routes.js';
import logo from "../../images/logo.png"


function ResponsiveAppBar() {



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  
  

  return (
    <AppBar position="fixed" sx={{background:"#FFD800", color:"#282c34", height:"4rem"}}>
       
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Typography
            variant="h6"
            component="a"
            href={routes.home}
            sx={{
             
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            <img alt='utilaj' src={logo} width={'100%'} style={{height:75, border:1, borderColor:'#282c34', color:'#282c34', borderRadius:5 }}/>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',} }}>
               <Button
                key='acasa'
                component='a'
                href={routes.home}
                variant='filled'
                sx={{ my: 0, color: 'inherit', display: 'block', borderRadius: 5 }}
              >
                Acasa
              </Button>
              <Button
                component='a'
                href={routes.aboutUs}
                key='despreNoi'
                variant='filled'
                sx={{ my: 0, color: 'inherit', display: 'block', borderRadius: 5 }}
              >
                Despre Noi
              </Button>
              <Button
                component='a'
                href={routes.contact}
                key='contact'
                variant='filled'
                sx={{ my: 0, color: 'inherit', display: 'block', borderRadius: 5 }}
              >
                Contact
              </Button>
          </Box>
          
          <Box sx={{  display: { md: 'none', xs:'block'} }}>
            {/* <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpen}
            sx={{color:'#282c34'}}
            >
              Meniu
            </Button>
            <Menu
              id="basic-menu"
              sx={{justifyContent:'center', position:'flex',  ml:'auto', mr:'auto' }}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem  component='a'
                href='/' onClick={handleClose}>Acasa</MenuItem>
              <MenuItem  component='a'
                href='/despreNoi' onClick={handleClose}>Despre Noi</MenuItem>
              <MenuItem  component='a'
                href='/contact' onClick={handleClose}>Contact</MenuItem>
            </Menu> */}
                         <DropdownButton style={{position:'relative', top:0}}/>

          </Box>
               </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;