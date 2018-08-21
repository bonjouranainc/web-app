import React from 'react';
import Addon from './Addon';

const Addons = ({ addons }) => (
  <div>
    {addons.map((addon, index) => (
      <Addon
        key={index}
        product={addon.title}
        price={addon.variants[0].price}
      />
    ))}
  </div>
);

export default Addons;
