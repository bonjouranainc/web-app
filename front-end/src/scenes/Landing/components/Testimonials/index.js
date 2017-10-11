import React, { Component } from 'react';

import Testimonial1 from './components/Testimonial1.js';
import Testimonial2 from './components/Testimonial2.js';
import Navigation from './components/Navigation.js';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: 1 
    };

    this._nextSlide = this._nextSlide.bind(this);
    this._previousSlide = this._previousSlide.bind(this);
  }

  render() {

    return (
      <div>
        { this.state.testimonial === 1 ? 
          <Testimonial1 
            _nextSlide={this._nextSlide}
            _previousSlide={this._previousSlide}
          />
          : null }
        { this.state.testimonial === 2 ? 
          <Testimonial2 
            _nextSlide={this._nextSlide}
            _previousSlide={this._previousSlide}
          />
          : null }
      </div>
    );
  }

  _nextSlide() {
    console.log('next working');
    {/*this.setState({ testimonial: this.state.testimonial + 1 }) */}
  }

  _previousSlide() {
    console.log('back working');
    {/* this.setState({ testimonial: this.state.testimonial - 1 }) */}
  }
}

export default Testimonials;
