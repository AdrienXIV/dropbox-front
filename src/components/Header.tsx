import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

interface S {
  activeItem: string;
}

export default class Header extends Component<any, S> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeItem: 'accueil',
    };
  }

  handleItemClick(name: string) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary stackable size='massive'>
        <Menu.Item name='accueil' active={activeItem === 'accueil'} onClick={() => this.handleItemClick('accueil')}>
          <Link to='/'>Accueil</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='inscription' active={activeItem === 'inscription'} onClick={() => this.handleItemClick('inscription')}>
            <Link to='/inscription'>Inscription</Link>
          </Menu.Item>
          <Menu.Item active={activeItem === 'déconnexion'} onClick={() => this.handleItemClick('déconnexion')}>
            Déconnexion
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
