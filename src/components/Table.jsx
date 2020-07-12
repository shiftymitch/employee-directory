import React, { Component } from "react";
import Employee from "./Employee.jsx";
import { results as employees } from "./employees.json";

function Table() {
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" className="search m-4"/>
            <table className="table table-dark">
                <thead>
                    <th></th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Position</th>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        return (
                            <Employee 
                                photo={employee.picture.thumbnail}
                                firstName={employee.name.first} 
                                lastName={employee.name.last} 
                                email={employee.email}
                                position={employee.position}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;