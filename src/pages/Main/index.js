import React, { useState } from "react";
import Employees from "../../utils/Employee.json";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

export default function Main() {
    //Set up initial State(s) with Hooks
    const [searchTerm, setSearchTerm] = useState("");
    //  setSearch("Cox");

    //Create a filter function to sort through relevant data fields
    //Filter method from https://scotch.io/tutorials/quick-and-simple-search-filter-using-vanilla-javascript
    const filteredEmployees = Employees.filter((target) => {
    return (
    target["Employee_Name"].toLowerCase().includes(searchTerm.toLowerCase()) ||
    target["eid"].toString().includes(searchTerm.toString()) ||
    target["Class_Title"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    });
    //   console.log(filteredEmployees);

    // function to set the value of an eventHandler target to the searchTerm state
    const handleInputChange = e => {
        setSearchTerm(e.target.value);
    };

    

    // sort columns button function
    //shamelessly lifted from https://www.w3schools.com/howto/howto_js_sort_table.asp
    const handleSortField = (n) => {
            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
            table = document.getElementById("EmployeeTable");
            switching = true;
            // Set the sorting direction to ascending:
            dir = "asc";
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
              // Start by saying: no switching is done:
              switching = false;
              rows = table.rows;
              /* Loop through all table rows (except the
              first, which contains table headers): */
              for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i + 1].getElementsByTagName("td")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir === "asc") {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                } else if (dir === "desc") {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                  }
                }
              }
              if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount ++;
              } else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount === 0 && dir === "asc") {
                  dir = "desc";
                  switching = true;
                }
              }
            }
          }

          const handleSortNum = (n) => {
            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
            table = document.getElementById("EmployeeTable");
            switching = true;
            // Set the sorting direction to ascending:
            dir = "asc";
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
              // Start by saying: no switching is done:
              switching = false;
              rows = table.rows;
              /* Loop through all table rows (except the
              first, which contains table headers): */
              for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i + 1].getElementsByTagName("td")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir === "asc") {
                  if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                  }
                } else if (dir === "desc") {
                  if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                  }
                }
              }
              if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount ++;
              } else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount === 0 && dir === "asc") {
                  dir = "desc";
                  switching = true;
                }
              }
            }
          }

    return (
      <div>
        <SearchBox handleInputChange={handleInputChange} results={searchTerm} />
        <Table Employees={filteredEmployees}
        handleSortString={handleSortField} handleSortNumber={handleSortNum}/> 
        </div>
    )
}
