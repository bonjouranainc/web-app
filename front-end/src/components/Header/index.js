import React, { Component } from 'react';

import logo from './images/ba-logo-w.svg';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false 
    }

    this._hideHeader = this._hideHeader.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll',this._hideHeader);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this._hideHeader);
  }

  render() {

  let classHide = this.state.isHide ? 'hide' : ''

    return (
      <div className={'header ' + classHide }> 
        <div className='logo'>
          <a href='/'>
            <img src={ logo } />
          </a>
        </div>
        <div className='menu s-txt'>
          <a href='#'>
            <p>Register</p>
          </a>
          <a href='#'>
            <p>Sign in</p>
          </a>
        </div>
      </div>
    ); 
  }

  _hideHeader() {
    let isHide = this.state.isHide;

    window.scrollY > this.scrollPosition ?
    !isHide && this.setState({isHide: true})
    :
    isHide && this.setState({isHide:false})
    this.scrollPosition = window.scrollY;
  }
}

export default Header;
