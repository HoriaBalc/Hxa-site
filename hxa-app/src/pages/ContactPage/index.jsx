import * as React from 'react';
import ResponsiveAppBar from '../../components/navbar/index.jsx';
import { Container,Box, Typography } from '@mui/material';

function ContactPage() {

 
  
  

  return (
    <div className="App">
        <header>
            <ResponsiveAppBar/>
        </header>
        <Container className="App" sx={{top:100, position:'relative'}}>
          <Typography variant='h3'  sx={{ textAlign:'start',color:'#FFD800  ', margin:'0px 15px 20px 15px', padding:0}}>
            Contact
          </Typography>
         
          <Typography variant='h5'  sx={{  display:'flex',textAlign:'start',color:'#FFD800  ', margin:'0px 15px 20px 15px', padding:0}}>
            Email: &nbsp;<Typography sx={{position:'relative', top:5}}>hxa.inex@gmail.com</Typography>
          </Typography>
          <Typography variant='h5'  sx={{ textAlign:'start', display:'flex',color:'#FFD800  ', margin:'0px 15px 20px 15px', padding:0}}>
            Telefon: &nbsp; <Typography sx={{position:'relative', top:5}}>0721370720</Typography>
          </Typography>
          
            
              
          

        </Container>
    </div>
  );
}
export default ContactPage;