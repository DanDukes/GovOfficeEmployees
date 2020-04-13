import React from 'react'

export default function Table(props) {
    return (
        <div className="card">
        <table id="EmployeeTable" className="highlight blue-grey lighten-4">
          <thead>
            <tr>
              {/* clickable table columns to sort by ascending or descending order */}
              <th onClick={() => props.handleSortNumber(0)}>
                EID{" "}
              </th>
              <th onClick={() => props.handleSortString(1)}>
                Name{" "}
              </th>
              <th onClick={() => props.handleSortString(2)}>
                Title{" "}
              </th>
              <th onClick={() => props.handleSortNumber(3)}>
                Wages{" "}
              </th>
              <th onClick={() => props.handleSortNumber(4)}>
                Benefits{" "}
              </th>
              <th onClick={() => props.handleSortNumber(5)}>
                Compensation{" "}
              </th>
            </tr>
          </thead>
          {/* loop through Employees and map to table */}
          {props.Employees.map((e) => (
            <tbody key={e.eid}>
              <tr>
                <td>{e.eid}</td>
                <td>{e.Employee_Name}</td>
                <td>{e.Class_Title}</td>
                <td>{Number(e.Wages)}</td>
                <td>{Number(e.Benefits)}</td>
                <td>{Number(e.Compensation)}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
}
