import React from "react";
import Data from "./Data";

function Card(props) {
    return <div className="card m-3 text-center" style={{width: "16rem"}} id={props.id}>
        <h2 className="m-3">Employee Directory</h2>
        <Data/>
    </div>
}

export default Card;