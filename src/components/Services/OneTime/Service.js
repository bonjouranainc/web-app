import React, { Component } from 'react';

export default class Service extends Component {
  state = {
    checkout: { lineItem: [] },
    product: {}
  };
  componentDidMount() {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    this.props.client.product.fetch(this.props.productId).then(product => {
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
  onFormSubmit = e => {
    e.preventDefault();

    const checkoutId = this.state.checkout.id;
    const hourLbl = this.props.label;
    const dayLbl = this.props.label2;
    const hour = e.target.elements.hour.value.trim();
    const day = e.target.elements.day.value.trim();

    const lineItemsToAdd = [
      {
        variantId: this.state.product.variantId,
        quantity: 1,
        customAttributes: [
          {
            key: hourLbl,
            value: hour
          },
          {
            key: dayLbl,
            value: day
          }
        ]
      }
    ];

    this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(checkout => {
        window.open(checkout.webUrl);
      });

    e.target.elements.hour.value = '';
    e.target.elements.day.value = '';
  };

  render() {
    const { title, label, label2 } = this.props;

    return (
      <div
        style={{
          paddingTop: '100px',
          paddingBottom: '200px'
        }}
      >
        <h2>{title}</h2>
        <h3>{this.state.product.description}</h3>
        <p>{`$${this.state.product.price}`}</p>
        <form onSubmit={this.onFormSubmit}>
          <label>
            {label}:
            <input type="text" placeholder="7:00am" name="hour" />
          </label>
          <label>
            {label2}:
            <input type="text" placeholder="Lunes" name="day" />
          </label>
          <button className="button-yo">Submit</button>
        </form>
      </div>
    );
  }
}
