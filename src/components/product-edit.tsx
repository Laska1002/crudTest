import React, { useState } from "react";
import styled from "styled-components";
import { Product } from "../types/Product";

interface EditProductFormProps {
  product: Product;
  onSave: (updatedProduct: Product) => void;
  onCancel: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Form = styled.form`
  background: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  background: #27ae60; /* Color verde */
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin-right: 5px;

  &:hover {
    background: #229954;
  }
`;

const CancelButton = styled.button`
  background: #e74c3c; /* Color rojo */
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin-left: 5px;

  &:hover {
    background: #c0392b;
  }
`;

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSave, onCancel }) => {
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...product, price, status });
  };

  return (
    <>
      <Overlay onClick={onCancel} />
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <h3>Editar {product.name}</h3>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
          <Select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Nuevo">Nuevo</option>
            <option value="Usado">Usado</option>
          </Select>
          <ButtonContainer>
            <SaveButton type="submit">Guardar</SaveButton>
            <CancelButton type="button" onClick={onCancel}>Cancelar</CancelButton>
          </ButtonContainer>
        </Form>
      </ModalContainer>
    </>
  );
};

export default EditProductForm;
