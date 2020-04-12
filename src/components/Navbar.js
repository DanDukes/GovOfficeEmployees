import React from 'react'

export default function Navbar(props) {
    return (
  <nav className="nav-extended grey">
  <br/>
    <div className="nav-wrapper center-align">
      <h3 className="center-align">Utah Governor's Office</h3>
      <h5 className="center-align">Employee Compensation Chart</h5>
    </div>
    <br/>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a href="/react" id="react" onClick={props.handleActiveChange}>React</a></li>
        <li className="tab"><a href="/react-table" id="reactTable" onClick={props.handleActiveChange}>React-Table</a></li>
        <li className="tab"><a href="/material-ui" id="materialUI" onClick={props.handleActiveChange}>Material-UI</a></li>
      </ul>
    </div>
  </nav>
    )
}
