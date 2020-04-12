import React from 'react'

export default function Table(props) {
    return (
        <div className="card">
        <table id="EmployeeTable" className="highlight blue-grey lighten-4">
          <thead>
            <tr>
              {/* clickable table columns to sort by ascending or descending order */}
              <th onClick={() => props.handleSortBtn(0)}>
                EID{" "}
              </th>
              <th onClick={() => props.handleSortBtn(1)}>
                Name{" "}
              </th>
              <th onClick={() => props.handleSortBtn(2)}>
                Title{" "}
              </th>
              <th onClick={() => props.handleSortBtn(3)}>
                Wages{" "}
              </th>
              <th onClick={() => props.handleSortBtn(4)}>
                Benefits{" "}
              </th>
              <th onClick={() => props.handleSortBtn(5)}>
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
                <td>{e.Wages}</td>
                <td>{e.Benefits}</td>
                <td>{e.Compensation}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
}
