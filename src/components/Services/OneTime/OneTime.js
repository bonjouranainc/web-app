import React, { Component } from 'react';
import Form from './Form';
import Description from './Description';

import '../../../styles/components/OneTime.css';

export default class Service extends Component {
  componentDidMount() {
    this.props.client.checkout.create().then(res => {
      this.checkoutId = res.id;
    });

    this.props.client.product.fetch(this.props.productId).then(product => {
      this.variantId = product.variants[0].id;
    });
  }
  onFormSubmit = e => {
    e.preventDefault();

    const checkoutId = this.checkoutId;
    const id = this.variantId;
    const hour = e.target.elements.hour.value.trim();
    const day = e.target.elements.day.value.trim();
    const hours = e.target.elements.hours.value.trim();
    const comment = e.target.elements.comment.value.trim();

    const lineItemsToAdd = [
      {
        variantId: id,
        quantity: 1,
        customAttributes: [
          {
            key: this.props.label,
            value: hour
          },
          {
            key: this.props.label2,
            value: day
          },
          {
            key: this.props.label3,
            value: hours
          },
          {
            key: this.props.label4,
            value: comment
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
    e.target.elements.hours.value = '';
    e.target.elements.comment.value = '';
  };

  render() {
    const { title, image, label, label2, label3, label4 } = this.props;

    return (
      <div className="one-time">
        <h2 className="one-time__title">{title}</h2>
        <div className="one-time__container">
          <Form
            image={image}
            label={label}
            label2={label2}
            label3={label3}
            label4={label4}
            onFormSubmit={this.onFormSubmit}
          />
          <Description />
        </div>
      </div>
    );
  }
}
