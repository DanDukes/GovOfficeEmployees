import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Employees from "../../utils/Employee.json";

export default function Main() {
    const [search, setSearch] = useState("");
    const [sortedField, setSortedField] = useState("");

  //  setSearch("Cox");

    //Filter method from https://scotch.io/tutorials/quick-and-simple-search-filter-using-vanilla-javascript
    const filteredEmployees = Employees.filter((target) => {
    return (
    target["Employee_Name"].toLowerCase().includes(search.toLowerCase()) ||
    target["eid"].toString().includes(search.toString()) ||
    target["Class_Title"].toLowerCase().includes(search.toLowerCase())
    );
    });

 //   console.log(filteredName);

    return (
        <div>
        <Navbar />
        <SearchBox />
        <Table/> 
        </div>
    )
}
