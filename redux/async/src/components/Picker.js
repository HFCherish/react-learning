import React from 'react'

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

export default Picker;