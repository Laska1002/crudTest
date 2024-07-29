import React from "react";
import styled from "styled-components";

interface RepeatedProductsModalProps {
  names: { name: string, count: number }[];
  onClose: () => void;
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

const Title = styled.h2`
  margin: 0;
  padding: 0 0 20px 0;
  text-align: center;
  color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #444;
  color: #fff;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
  color: #fff;
`;

const TableRow = styled.tr`
  &:last-child ${TableCell} {
    border-bottom: none;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c; /* Color rojo */
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #c0392b;
  }
`;

const RepeatedProductsModal: React.FC<RepeatedProductsModalProps> = ({ names, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Teléfonos más repetidos</Title>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Producto</TableHeader>
              <TableHeader>Existencia</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {names.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.count} u.</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ModalContainer>
    </>
  );
};

export default RepeatedProductsModal;
