import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './index.css'; 
import { HiMenu } from "react-icons/hi";
import * as routes from '../../routes.js';


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="dropdown">
      <Button  onClick={toggleDropdown} sx={{top:20, right:5,color:'#282c34', position:'fixed'}}>
         <HiMenu size={25}/>
      </Button>
      {isOpen && (
        <div className="dropdown-content" style={{ display:'flex', flexDirection:'column', background:'#FFD800', position:'relative', width:100, top:90, left:40}}>
          <Typography component='a' href={routes.home} className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Acasa</Typography>
          <Typography component='a' href={routes.aboutUs} className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Despre Noi </Typography>
          <Typography component='a' href={routes.contact} className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Contact</Typography>
        </div>
      )}
    </Container>
  );
};

export default DropdownButton;