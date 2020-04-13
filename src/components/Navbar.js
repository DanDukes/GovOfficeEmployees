import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
  <nav className="nav-extended blue-grey">
  <br/>
    <div className="nav-wrapper center-align">
      <h3 className="center-align">Utah Governor's Office</h3>
      <h5 className="center-align">Employee Compensation Chart</h5>
    </div>
    <br/>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><Link to="/GovOfficeEmployees/react" className={
                window.location.pathname === "/GovOfficeEmployees" || window.location.pathname === "/GovOfficeEmployees/react"
                  ? "nav-link active"
                  : "nav-link"
              }>
          React
        </Link></li>
        <li className="tab"><Link to="/GovOfficeEmployees/react-table" className={
                window.location.pathname === "/GovOfficeEmployees/react-table"
                  ? "nav-link active"
                  : "nav-link"
              }>
          React-Table
        </Link></li>
        <li className="tab"><Link to="/GovOfficeEmployees/material-ui" className={
                window.location.pathname === "/GovOfficeEmployees/material-ui"
                  ? "nav-link active"
                  : "nav-link"
              }>
          Material UI
        </Link></li>
      </ul>
    </div>
  </nav>
    )
}
