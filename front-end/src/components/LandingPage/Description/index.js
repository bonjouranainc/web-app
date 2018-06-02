import React, { Component } from 'react';
import { Button, Responsive, Grid } from 'semantic-ui-react';

import './styles.css';

export default class Description extends Component {
  state = {};

  handleUpdate = (e, { width }) => this.setState({ width });

  render() {
    const { width } = this.state;
    const textAlign =
      width >= Responsive.onlyTablet.minWidth ? 'left' : 'center';

    return (
      <div className="description">
        <Responsive
          as={Grid}
          columns={1}
          fireOnMount
          onUpdate={this.handleUpdate}
        >
          <Grid.Column textAlign={textAlign} className="desc-box">
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
        </Responsive>
      </div>
    );
  }
}
