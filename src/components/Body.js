import React, { Component } from "react";
import Card from "./Card.jsx";


class Body extends Component {
    state = {
        todayCases: "",
        yesterdayCases: ""
    };

    componentDidMount() {
        
    }


    render() {
      return <div className="container">
            <div className="row justify-content-around">
                <Card/>
            </div>
        </div>
    }
}

export default Body;