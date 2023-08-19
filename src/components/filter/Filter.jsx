import React from 'react';

export const Filter = ({ handleFilterChange, filter }) => {
  return (
    <div>
      <label>Find contact by name</label>
      <input
        type="text"
        name="Find contact by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
