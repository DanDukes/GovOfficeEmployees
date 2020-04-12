import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Employees from "../../utils/Employee.json";

export default function Main() {
    const [search, setSearch] = useState("");
    const [sortedField, setSortedField] = useState("");

    setSearch("Cox");

    //Filter method from https://scotch.io/tutorials/quick-and-simple-search-filter-using-vanilla-javascript
    let filteredName = Employees.filter(target => target["Employee_Name"].toLowerCase().includes(search.toLowerCase()));

    console.log(filteredName);

    return (
        <div>
        <Navbar />
        <SearchBox />
        <Table/> 
        </div>
    )
}
