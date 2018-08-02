import React, { Component } from 'react';

export default class Handyman extends Component {
  state = {
    checkout: { lineItem: [] },
    product: {}
  };
  componentWillMount() {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    this.props.client.product
      .fetch('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzExNzcyNTkzMjMx')
      .then(product => {
        this.setState({
          product: {
            title: product.title,
            description: product.description,
            variantId: product.variants[0].id,
            price: product.variants[0].price
          }
        });
      });
  }
  onSubmit = e => {
    e.preventDefault();

    const checkoutId = this.state.checkout.id;
    const hourLbl = document.querySelector('#hourLbl').textContent;
    const dayLbl = document.querySelector('#dayLbl').textContent;
    const hour = e.target.elements.hour.value.trim();
    const day = e.target.elements.day.value.trim();

    const newHour = hourLbl.replace(':', '');
    const newDay = dayLbl.replace(':', '');

    this.props.client.checkout
      .addLineItems(checkoutId, [
        {
          variantId: this.state.product.variantId,
          quantity: 1,
          customAttributes: [
            {
              key: newHour,
              value: hour
            },
            {
              key: newDay,
              value: day
            }
          ]
        }
      ])
      .then(checkout => {
        window.open(checkout.webUrl);
      });
    e.target.elements.hour.value = '';
    e.target.elements.day.value = '';
  };

  render() {
    return (
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '100px'
        }}
      >
        <h2>{this.state.product.title}</h2>
        <p>{this.state.product.description}</p>
        <p>{`$${this.state.product.price}`}</p>
        <form onSubmit={this.onSubmit}>
          <label id="hourLbl">
            Hora:
            <input type="text" placeholder="7:00am" name="hour" />
          </label>
          <label id="dayLbl">
            Dia:
            <input type="text" placeholder="Lunes" name="day" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
