import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './index.css'; 
import { HiMenu } from "react-icons/hi";
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
          <Typography component='a' href='/' className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Option 1</Typography>
          <Typography component='a' href='/' className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Option </Typography>
          <Typography component='a' href='/' className='link' sx={{textDecoration:'none', color:'#282c34', padding:1, margin:0}}>Option 3</Typography>
        </div>
      )}
    </Container>
  );
};

export default DropdownButton;