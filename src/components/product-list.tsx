import React from "react";
import styled from "styled-components";
import { Product } from "../types/Product";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductList: React.FC<ProductListProps> = ({ products, onEdit }) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} />
      ))}
    </ListContainer>
  );
};

export default ProductList;
