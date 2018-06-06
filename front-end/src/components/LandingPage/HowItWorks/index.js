import React, { Component } from 'react';
import { Grid, Image, Container, Responsive } from 'semantic-ui-react';

import url1 from '../../../images/png/Escoga los servicios.png';
import url2 from '../../../images/png/Recibe tu Visita-07.png';
import url3 from '../../../images/png/Voila-07.png';

import './styles.css';

export default class HowItWorks extends Component {
  state = {};

  handleUpdate = (e, { width }) => this.setState({ width });
  render() {
    const { width } = this.state;

    const textAlignMiddle =
      width >= Responsive.onlyTablet.minWidth ? 'right' : 'center';

    const textAlign =
      width >= Responsive.onlyTablet.minWidth ? 'justified' : 'center';

    return (
      <div className="howItWorks">
        <Responsive
          as={Grid}
          fireOnMount
          onUpdate={this.handleUpdate}
          className="howItWorks__grid"
        >
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8} padded="true">
              <Image src={url1} size="medium" floated="right" />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Container textAlign={textAlign}>
                <h3>Escoja sus servicios</h3>
                <p>
                  Seleccione entre una variedad de servicios para el hogar y
                  seleccione el día y hora que desea recibir el servicio
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row reversed="mobile">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Container textAlign={textAlignMiddle}>
                <h3>Reciba su visita</h3>
                <p>
                  Un personal entrenado y confiable le visitará cada semana u
                  ocasión, que le ofrecera un servicio de calidad
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image src={url2} size="large" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image src={url3} size="large" floated="right" />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Container textAlign={textAlign}>
                <h3>Voila! Todas sus tareas completadas</h3>
                <p>
                  Llega a un hogar limpio y fresco, con las compras del
                  supermercado realizada, el dry-cleaning recogido y todas sus
                  tareas completadas
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Responsive>
      </div>
    );
  }
}
