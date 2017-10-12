import React, { Component } from 'react';

import Navigation from './Navigation';

import './styles.css';

class Testimonial extends Component {
  render() {
    return (
      <div className='testimonials wrapper'>
        <img src={this.props.img}></img>
        <p className='b-txt'>{this.props.name}</p>
        <p>{this.props.quote}</p>
        <Navigation 
          _leftClick={this.props._leftClick}
          _rightClick={this.props._rightClick}
        />
      </div>
    );  
  }
}

export default Testimonial;
