import React, { Component } from 'react';
import { Button, Responsive, Grid } from 'semantic-ui-react';

import './styles.css';

export default class Desc extends Component {
  state = {};

  handleUpdate = (e, { width }) => this.setState({ width });

  render() {
    return (
      <div className="desc">
        <Grid.Column computer={8} className="desc-box">
          <h2 className="heading-primary">
            Enfócate en lo que realmente importa.
          </h2>
          <p className="heading-sub">
            Bonjour Ana es tu asistente personal para el hogar y necesidades
            diarias.
          </p>
          <Button className="desc-box-button">
            <a href="">Oferta de Limpieza</a>
          </Button>
        </Grid.Column>

        <Grid.Column computer={8}>
          <div className="desc-image" />
        </Grid.Column>
      </div>
    );
  }
}
