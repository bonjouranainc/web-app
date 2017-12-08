import React, { Component } from 'react';

import Testimonial from './Testimonial.js';

import Tamara from './pictures/tamara-matos.jpg';
import Mayra from './pictures/mayra-candelaria.jpg';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: true
    };

    this._leftClick = this._leftClick.bind(this);
    this._rightClick = this._rightClick.bind(this);

  }

  render() {

  let testimonial1 = {
    url: Tamara,
    name: 'Tamara Matos',
    quote: '"Excelente servicio! Siempre dan la milla extra y mi vida ahora es mucho más fácil gracias a ellos! 100% recomendado!"'
  }

  let testimonial2 = {
    url: Mayra,
    name: 'Mayra Candelaria',
    quote: ' "Cuento con el servicio de compras semanales hace varios meses y estoy satisfecha. Son muy receptivos a comentarios hechos y buscan satisfacer al cliente rápidamente."'
  }

    return (
      <div>
        <Testimonial 
          _leftClick={this._leftClick} 
          _rightClick={this._rightClick} 
          img={ this.state.testimonial ? 
            testimonial1.url :
            testimonial2.url
          }
          name={ this.state.testimonial ? 
            testimonial1.name :
            testimonial2.name 
          }
          quote={ this.state.testimonial ?
            testimonial1.quote :
            testimonial2.quote
          }
        />
      </div>
    );
  }

  _leftClick() {
    this.setState({
      testimonial: !this.state.testimonial 
    })
  }
  
  _rightClick() {
    this.setState({
      testimonial: !this.state.testimonial
    })
  }

}

export default Testimonials;
