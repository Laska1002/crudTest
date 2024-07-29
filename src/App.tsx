import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { products as initialProducts } from "./data/products";
import SearchBar from "./components/search-bar";
import ProductList from "./components/product-list";
import EditProductForm from "./components/product-edit";
import RepeatedProductsModal from "./components/product-repeat-modal";
import { Product } from "./types/Product";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const MoreRepeatedButton = styled.button`
  background: #555;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background: #777;
  }
`;

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showRepeatedModal, setShowRepeatedModal] = useState(false);

  useEffect(() => {
    const expandedProducts = expandProducts(initialProducts);
    setProducts(expandedProducts);
  }, []);

  const expandProducts = (products: Product[]): Product[] => {
    return products.flatMap(product =>
      Array.from({ length: product.unidades }, (_, index) => ({
        ...product,
        id: product.id + index / 1000, // Unique id for each unit
      }))
    );
  };

  const getRepeatedNames = () => {
    const nameCount: { [key: string]: number } = {};
    initialProducts.forEach(product => {
      nameCount[product.name] = product.unidades;
    });
    const sortedNames = Object.entries(nameCount).sort((a, b) => b[1] - a[1]);
    return sortedNames.map(entry => ({ name: entry[0], count: entry[1] })).slice(0, 5);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    const updatedProducts = products.map(p =>
      p.id === updatedProduct.id
        ? { ...p, price: updatedProduct.price, status: updatedProduct.status }
        : p
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const handleMoreRepeatedClick = () => {
    setShowRepeatedModal(true);
  };

  const handleCloseRepeatedModal = () => {
    setShowRepeatedModal(false);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer>
      <GlobalStyles />
      <TopBar>
        <SearchBar onSearch={handleSearch} />
        <MoreRepeatedButton onClick={handleMoreRepeatedClick}>Más repetidos</MoreRepeatedButton>
      </TopBar>
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {showRepeatedModal && (
        <RepeatedProductsModal names={getRepeatedNames()} onClose={handleCloseRepeatedModal} />
      )}
      <ProductList products={filteredProducts} onEdit={handleEdit} />
    </AppContainer>
  );
};

export default App;
