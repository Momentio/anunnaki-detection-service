import { useRouteError } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
import React from "react";

export namespace MainContainer {
  export type Params = {
    children: React.ReactElement;
  }
}

export default function MainContainer(props: MainContainer.Params) {
  const error = useRouteError();
  console.error(error);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container sx={{padding: '96px 32px'}}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
