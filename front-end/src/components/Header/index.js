import React, { Component } from 'react';

import logo from './images/ba-logo-w.svg';

import { Link } from 'react-router-dom';

import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false, 
      headerColor: false,
    }

    this._hideHeader = this._hideHeader.bind(this);
    this._changeHeaderColor = this._changeHeaderColor.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll',this._hideHeader);
    window.addEventListener('scroll',this._changeHeaderColor);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this._hideHeader);
  }

  render() {

  let classHide = this.state.isHide ? 'hide' : '';
  let changeColor = this.state.headerColor ? 'var(--ba-yellow)' : 'transparent';

    return (
      <div className={ 'header ' + classHide } 
        style={{ backgroundColor: changeColor }}
      > 
        <div className='logo'>
          <a href='/'>
            <img src={ logo } alt='' />
          </a>
        </div>
        <div className='menu-icon'>
          <Link to='/menu'>
            <i className="material-icons">&#xE5D2;</i>
          </Link>
        </div>
        <div className='header-btns s-txt'>
          <a href='https://bonjourana.com/collections/servicio-al-hogar' className='button-w-o'>
            Servicios
          </a>
          <a href='https://bonjourana.wixsite.com/bonjourana/supermercado' className='button-w-o'>
            Supermercado
          </a>
          <a href='https://bonjourana.com/account/login' className='button-w-o'>
            Sign in
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

  _changeHeaderColor() {
    window.scrollY > 500 ?
      this.setState({ headerColor: true })
      :
      this.setState({ headerColor: false })
  }
}

export default Header;
