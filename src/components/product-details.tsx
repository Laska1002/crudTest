import React from "react";
import styled from "styled-components";
import { Product } from "../types/Product";

interface ProductDetailsProps {
  product: Product;
}

const DetailsContainer = styled.div`
  background: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
`;

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <DetailsContainer>
      <img src={product.img} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Modelo: {product.model}</p>
      <p>Estado: {product.status}</p>
    </DetailsContainer>
  );
};

export default ProductDetails;
