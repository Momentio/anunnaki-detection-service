import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import AnnunakiInfo from './AnnunakiInfo';

const pallete: string[] = [
  '#2A8C82',
  '#41BFB3',
  '#91F2E9',
  '#275950',
  '#260101',
];

/**
 * @see https://mui.com/material-ui/customization/palette/
 */
const theme = createTheme({
  palette: {
    primary: {
      main: pallete[3],
    },
    background: {
      paper: pallete[1],
    },
    text: {
      primary: pallete[4],
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{padding: '32px'}}>
        <AnnunakiInfo />
      </Container>
    </ThemeProvider>
  );
}