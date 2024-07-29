import React from "react";
import styled from "styled-components";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
}

const Card = styled.div`
  background: #333;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 150px; /* Ajusta el ancho según sea necesario */
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #e74c3c; /* Color rojo */
  color: #fff;
  border: none;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit }) => {
  return (
    <Card>
      <Image src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Estado: {product.status}</p>
      <Button onClick={() => onEdit(product)}>Editar</Button>
    </Card>
  );
};

export default ProductCard;
