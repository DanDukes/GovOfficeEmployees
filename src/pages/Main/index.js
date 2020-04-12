import React from 'react'
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

export default function Main() {
    return (
        <div>
        <Navbar />
        <SearchBox />
        <Table/> 
        </div>
    )
}
