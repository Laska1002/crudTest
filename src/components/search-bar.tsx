import React, { ChangeEvent } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  margin: 20px;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #555;
  color: #fff;

  &::placeholder {
    color: #ddd;
  }
`;

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Buscar" onChange={handleInputChange} />
    </SearchBarContainer>
  );
};

export default SearchBar;
