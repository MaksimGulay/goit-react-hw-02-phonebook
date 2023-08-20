import React from 'react';
import { FilterContainer, Label, Input } from './filter-style';

export const Filter = ({ handleFilterChange, filter }) => {
  return (
    <FilterContainer>
      <Label>Find contact by name</Label>
      <Input
        type="text"
        name="Find contact by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};
