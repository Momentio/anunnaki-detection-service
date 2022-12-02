import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./routes/RootPage";
import ErrorPage from "./routes/ErrorPage";
import './index.css';

/**
 * @see https://reactrouter.com/en/main/start/tutorial
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
