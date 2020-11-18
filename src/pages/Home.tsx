import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../components/HomeGrid';

export default class Home extends React.Component {
  render() {
    return (
      <Container maxWidth='lg' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HomeGrid.Display />
      </Container>
    );
  }
}
