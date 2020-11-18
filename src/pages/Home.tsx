import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomeGrid from '../components/HomeGrid';

export default class Home extends React.Component {
  render() {
    return (
      <Container maxWidth='lg'>
        <Typography component='div' style={{ height: '100vh' }}>
          <HomeGrid.Display />
        </Typography>
      </Container>
    );
  }
}
