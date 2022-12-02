import React from "react";
import MainContainer from '../components/MainContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack  from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';

export default function ErrorPage() {
  return (
    <MainContainer>
      <Box display='flex' sx={{ flexGrow: 1 }} justifyContent='center'>
        <Stack spacing={2}>
          <Typography variant='h3'>
            Page not found!
          </Typography>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="240px"
              image="./images/annunak-danger.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Take care of your safety!
              </Typography>
              <Typography variant="body2">
                Perhaps the Anunnaki blocked this content or hacked our site.
                Don't worry, humanity is with you!
              </Typography>
            </CardContent>
          </Card>
          <Alert severity='error'>If you are an Annunak, leave our site immediately.</Alert>
        </Stack>
      </Box>
    </MainContainer>
  );
}
