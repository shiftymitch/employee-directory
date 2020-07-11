import React from "react";

function Employee(props) {
    return <>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.position}</td>
    </>
}

export default Employee;