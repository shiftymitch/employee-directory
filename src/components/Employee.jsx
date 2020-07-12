import React from "react";

function Employee(props) {
    return <tr>
        <td><img src={props.photo} alt=""/></td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
    </tr>
}

export default Employee;