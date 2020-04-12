import React from 'react'
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Employees from "../../utils/Employee.json";

export default function Main() {
    return (
        <div>
        <Navbar />
        <SearchBox />
        <Table/> 
        </div>
    )
}
