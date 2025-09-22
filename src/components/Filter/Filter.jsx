import React from 'react';
import { FilterInput } from 'components/Filter/Filter.styled.js';

export const Filter = ({ handleChange, filter }) => {
  return (
    <label>
      <div>Find contact by name</div>
      <FilterInput
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        autoComplete="off"
        placeholder="Search contacts"
      />
    </label>
  );
};
