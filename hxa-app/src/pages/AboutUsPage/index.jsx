import * as React from 'react';
import ResponsiveAppBar from '../../components/navbar/index.jsx';
import { Box, Container, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex.js';

function AboutUsPage() {


  
  

  return (
    <div style={{ backgroundColor:'grey'}} >
        {/* <header>
            <ResponsiveAppBar/>
        </header> */}
        <div >
          <br/>
          <br id="about"/>
          <br/>
          <br/>
        </div>  
        <Container  sx={{top:0, position:'relative', backgroundColor:'grey', position:'relative', top:-22, zIndex:1}}>
        
        <Typography  variant='h3'  sx={{ textAlign:'start',color:'#FFD800  ',  margin:'20px 15px 20px 15px', padding:'0 0 0 0'}}>
            About Us
          </Typography>
          <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'grey', borderRadius:5, color:'#FFD800',  margin:'0px 0px 20px 0px'}}>
            <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Cine suntem noi?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 SC HXA INEX SRL este o societate infiintata in anul 2022 specializata in domeniul constructiilor si a instalatiilor. In momentul de fata dispunem de un personal profesionist, dar destul de limitat, firma avand doar 4 angajati, si de un buldoexcavator nou cu ajutor caruia vom executa lucrari.
              </Typography>
            
              
          </Box>

          <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'grey', borderRadius:5, color:'#FFD800',  margin:'0px 0px 20px 0px'}}>
          <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Ce facem noi?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 HXA INEX executa lucrari in domeniul constructiilor si a instalatiilor, mai precis in executarea lucrarilor de amenajarea drumurilor, de canalizare si alimentare cu apa.
              </Typography>
            
              
          </Box>
          <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'grey', borderRadius:5, color:'#FFD800',  margin:'0px 0px 20px 0px'}}>
            
          <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Unde activam noi?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 Raza de activitate a firmei este in aria judetului Cluj si in aproprierea acestuia, sediul firmei fiind in orasul Cluj-Napoca.
              </Typography> 
              
          </Box>
          <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'grey', borderRadius:5, color:'#FFD800',  margin:'0px 0px 20px 0px'}}>
          
          <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Ce obiective avem?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 Societatea are mai multe obiective printre care obtinerea si executarea lucrarilor de instalatii edilitare si amenajare a drumului.
              </Typography> 
              
          </Box>
          
        </Container>
    </div>
  );
}
export default AboutUsPage;