import React from 'react';
import { Button, Divider, Form, Grid, Segment, Header, Container } from 'semantic-ui-react';

export default class Register extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
        <Container text textAlign='center'>
          <Header as='h1' content='Dropbox - IMIE' subheader='Groupe 6' style={{ marginBottom: '5%' }} />
          <Segment placeholder size='massive'>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form size='large'>
                  <Form.Input icon='user' iconPosition='left' label='Courriel' placeholder='exemple@gmail.com' type='email' />
                  <Form.Input icon='lock' iconPosition='left' label='Mot de passe' type='password' />

                  <Button content='Connexion' primary />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Button content="S'inscrire" icon='signup' size='big' />
              </Grid.Column>
            </Grid>

            <Divider vertical>Ou</Divider>
          </Segment>
        </Container>
      </div>
    );
  }
}
