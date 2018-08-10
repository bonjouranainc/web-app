import React, { Component } from 'react';

export default class AnaBasic extends Component {
  state = {
    checkout: { lineItem: [] }
  };
  componentDidMount() {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    this.props.client.product.fetch(this.props.productId).then(product => {
      this.variants = product.variants;
    });
  }

  compareVariantStrings(variantString) {
    let id;
    this.variants.forEach(variant => {
      if (variant.title === variantString) {
        id = variant.id;
      }
    });
    return id;
  }

  checkout(checkoutId, lineItemsToAdd) {
    this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(checkout => {
        window.open(checkout.webUrl);
      });
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

    this.checkout(checkoutId, lineItemsToAdd);

    e.target.elements.houseType.value = '';
    e.target.elements.rooms.value = '';
    e.target.elements.bathrooms.value = '';
    e.target.elements.town.value = '';
    e.target.elements.day.value = '';
    e.target.elements.hour.value = '';
  };

  render() {
    const { title, label, label2, label3, label4, label5, label6 } = this.props;

    return (
      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <header>
          <h1>{title}</h1>
          <h3>
            Compra/Subscripcion de servicio de limpieza y servicios adicionales
          </h3>
        </header>

        <form onSubmit={this.onFormSubmit}>
          <select name="houseType">
            <option>{label}</option>
            <option value="Apartamento 1 piso">Apartamento 1 piso</option>
            <option value="Apartamento 2 pisos">Apartamento 2 pisos</option>
            <option value="Casa 1 piso">Casa 1 piso</option>
            <option value="Casa 2 pisos">Casa 2 pisos</option>
          </select>

          <select name="rooms">
            <option>{label2}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name="bathrooms">
            <option>{label3}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>
            {label4}:
            <input type="text" name="town" placeholder="Bayamón" />
          </label>
          <label>
            {label5}:
            <input type="text" name="day" placholder="Miercoles" />
          </label>
          <label>
            {label6}:
            <input type="text" name="hour" placholder="7:00am" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
