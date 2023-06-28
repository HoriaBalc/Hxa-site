import * as React from 'react';
import ResponsiveAppBar from '../../components/navbar/index.jsx';
import { Box, Container, Typography } from '@mui/material';
import buldoexcavatorImg from '../../images/buldoexcavatorFata.jpg';
import DropdownButton from '../../components/dropdown/index.jsx';

function HomePage() {

  
  return (
    <div style={{backgroundColor:'grey'}} >
        <header>
            <ResponsiveAppBar/>
            <DropdownButton/>
        </header>
        <Container  sx={{top:100, position:'relative', backgroundColor:'grey', padding:'0px 0px 30px 0px'}}>
          <Box>
                      <img alt='utilaj' src={buldoexcavatorImg} width={'100%'} style={{border:1, borderColor:'#282c34', color:'#282c34', borderRadius:5 }}/>

          </Box>
          {/* <Box sx={{border:1, borderColor:'#282c34', backgroundColor:'#FFD800', borderRadius:5, color:'#282c34'}}>
            
          <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Ce facem noi?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 HXA INEX executa lucrari in domeniul constructiilor si a instalatiilor, mai precis in executarea lucrarilor de amenajarea drumurilor, de canalizare si alimentare cu apa.
              </Typography>
            
              <Typography variant='h6'  sx={{ textAlign:'start', margin:'0px 15px 0px 15px', padding:0}} >
              <strong>Unde activam noi?</strong>                </Typography>
              <Typography sx={{textAlign:'start', margin:'0px 15px 0px 15px', padding:0}}> 
                 Raza de activitate a firmei este in aria judetului Cluj si in aproprierea acestuia.
              </Typography> 

          </Box> */}
        
        </Container>
    </div>
  );
}
export default HomePage;