import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({subreddit, onSelect, options}) => (
  <span>
    <h1>{subreddit}</h1>
    <select onChange={event => onSelect(event.target.value)}>
      {
        options.map(option => (
          <option value={option}>{option}</option>
        ))
      }
    </select>
  </span>
)

Picker.propTypes = {
  subreddit: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired()
}

export default Picker;