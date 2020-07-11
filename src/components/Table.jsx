import React from "react";
import Employee from "./Employee.jsx";
import employees from "./employees.json";

function Table() {
    return <table className="table table-dark">
        <thead>
            <th>First</th>
            <th>Last</th>
            <th>email</th>
            <th>Position</th>
        </thead>
        <tbody>
            {/* Map Employees */}
            {employees.map(employee => {
                return (
                    <Employee 
                        firstName={employee.firstName} 
                        lastName={employee.lastName} 
                        email={employee.email}
                        position={employee.position}
                    />
                )
            })}
        </tbody>
    </table>
}

export default Table;