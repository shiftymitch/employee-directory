import React from "react";
import Table from "./Table.jsx"

function Card(props) {
    return <div className="card m-3 text-center" style={{width: "16rem"}} id={props.id}>
        <h4>Employee Directory</h4>
        <Table></Table>
    </div>
}

export default Card;