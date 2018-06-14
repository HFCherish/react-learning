import React from 'react';
import PropTypes from 'prop-types';

const Picker = ({onSelect, options, selected}) => (
  <div>
    <h1>{selected}</h1>
    <select onChange={e => onSelect(e.target.value)} value={selected}>
      {options.map(option =>
        <option value={option} key={option}>{option}</option>
      )}
    </select>
  </div>
);

Picker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.string.isRequired
};

export default Picker;
