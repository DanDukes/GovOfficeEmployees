import React from 'react'

export default function SearchBox(props) {
    return (
        <form className="search">
        <div className="input-field">
          <input
            value={props.searchTerm}
            onChange={props.handleInputChange}
            name="term"
            list="term"
            type="text"
            className="form-control"
            placeholder="filter by ID, Name, or Title"
            id="term"
          />
        </div>
      </form>
    )
}
