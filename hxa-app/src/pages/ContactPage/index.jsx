import * as React from 'react';
import ResponsiveAppBar from '../../components/navbar/index.jsx';
import { Container,Box, Typography } from '@mui/material';

function ContactPage() {

 
  
  

  return (
    <div className="App" style={{position: 'relative', top:-42, backgroundColor:'grey', color:'grey'}} >
        {/* <header>
            <ResponsiveAppBar/>
        </header> */}
         <div  style={{backgroundColor:'grey', color:'grey', top:-40, position:'relative'}}>
          <br  id='contact'/>
          <br/>
          <br/>
        </div>  
        <Container  sx={{top:-40, position:'relative'}}>
          <Typography  variant='h3'  sx={{ textAlign:'start',color:'#FFD800  ', margin:'0px 15px 20px 15px', padding:0}}>
            Contact
          </Typography>
          <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'grey', borderRadius:5, color:'#FFD800',  margin:'0px 0px 20px 0px'}}>

          <Typography variant='h5'  sx={{  display:'flex',textAlign:'start',color:'#FFD800  ', margin:'15px 15px 20px 15px', padding:0}}>
            Email: &nbsp;<Typography sx={{position:'relative', top:5}}>hxa.inex@gmail.com</Typography>
          </Typography>
          <Typography variant='h5'  sx={{ textAlign:'start', display:'flex',color:'#FFD800  ', margin:'0px 15px 20px 15px', padding:0}}>
            Telefon: &nbsp; <Typography sx={{position:'relative', top:5}}>0721370720</Typography>
          </Typography>
          </Box>
          
            
              
          

        </Container>
    </div>
  );
}
export default ContactPage;