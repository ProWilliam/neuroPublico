import React from 'react';
import { PlusIcon } from '../Icons/index';
import './ButtonAdd.styles.css';

export const AddProductButton: React.FC = () => {
  return (
    <button className="add-product-button">
      <PlusIcon />
      Añadir producto
    </button>
  );
};
