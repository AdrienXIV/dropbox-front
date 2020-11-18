import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    return <div></div>;
  }
}
