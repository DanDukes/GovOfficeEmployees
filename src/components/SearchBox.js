import React from 'react'

export default function SearchBox(props) {

// prevent default on <form>
const prevent = e => {
    e.preventDefault();
}

    return (
        <form className="search" onSubmit={prevent}>
        <div className="input-field">
          <input
            value={props.results}
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
