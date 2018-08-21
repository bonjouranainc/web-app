import React, { Component } from 'react';
import Header from './Header';
import AnaBasicService from './AnaBasicService';

import '../../../styles/components/AnaBasic.css';
export default class AnaBasic extends Component {
  state = {
    checkout: { lineItem: [] },
    addons: []
  };
  componentDidMount() {
    // Fetch the checkout for the id
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });
    // Fetch the product by the id
    this.props.client.product.fetch(this.props.productId).then(product => {
      this.variants = product.variants;
    });

    // Fetch the collection for the products inside of it
    this.props.client.collection
      .fetchWithProducts(this.props.collectionId)
      .then(product => {
        this.setState(() => ({ addons: product.products }));
      });
  }

  // Retrieve the variant id by searching for the
  // same title
  compareVariantStrings(variantString) {
    let id;
    this.variants.forEach(variant => {
      if (variant.title === variantString) {
        id = variant.id;
      }
    });
    return id;
  }

  onFormSubmit = e => {
    e.preventDefault();
    const checkoutId = this.state.checkout.id;
    const typeHouse = e.target.elements.houseType.value;
    const rooms = e.target.elements.rooms.value;
    const bathroom = e.target.elements.bathrooms.value;
    const town = e.target.elements.town.value;
    const day = e.target.elements.day.value;
    const hour = e.target.elements.hour.value;

    const variantString = `${typeHouse} / ${rooms} / ${bathroom}`;

    const id = this.compareVariantStrings(variantString);

    const lineItemsToAdd = [
      {
        variantId: id,
        quantity: 1,
        customAttributes: [
          {
            key: this.props.label4,
            value: town
          },
          {
            key: this.props.label5,
            value: day
          },
          {
            key: this.props.label6,
            value: hour
          }
        ]
      }
    ];

    this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(cart => {
        window.open(cart.webUrl);
      });

    e.target.elements.town.value = '';
    e.target.elements.day.value = '';
    e.target.elements.hour.value = '';
  };

  render() {
    const { title, label, label2, label3, label4, label5, label6 } = this.props;

    return (
      <div className="ana-basic">
        <Header title={title} />
        <form className="ana-basic__form" onSubmit={this.onFormSubmit}>
          <AnaBasicService
            onFormSubmit={this.onFormSubmit}
            label={label}
            label2={label2}
            label3={label3}
            label4={label4}
            label5={label5}
            label6={label6}
          />
          <div className="ana-basic__checkout">
            <button className="button-y">Checkout</button>
          </div>
        </form>
      </div>
    );
  }
}
