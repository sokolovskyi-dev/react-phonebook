import React from 'react';
import { FilterInput } from './Filter.styled';

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
