import React, {Component} from "react";
import { MDBDataTable } from "mdbreact";
import employees from "./employees";
import Button from "./Button";

class Data extends Component {
  state = {
      columns: [
          {
            label: "Name",
            field: "name"
          },
          {
            label: "Position",
            field: "position"
          },
          {
            label: "Office",
            field: "office"
          },
          {
            label: "Age",
            field: "age"
          }
      ],
      rows: employees
    }

  handleBtnClick = event => {
    this.addEmployee(
      document.getElementById("name").value,
      document.getElementById("position").value,
      document.getElementById("office").value,
      document.getElementById("age").value
    );

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("office").value = "";
    document.getElementById("age").value = "";
  }

  addEmployee = (name, position, office, age) => {
    if(name === "" || position === "" || office === "" || age === "") {
      alert("Error: Missing required details.");
      return;
    }

    employees.push({
      name: name,
      position: position,
      office: office,
      age: age
    })

    this.setState({ rows: employees });
  }
    
  render() {
    return (
      <div>
        <Button/>
        <MDBDataTable
          striped
          small
          data={this.state}
          sorting={"true"}
        />

      {/* <!-- Modal --> */}
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                          Enter Employee Details:</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span className="color2" aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <form action="">
                        <ul>
                          <li>
                            <label className="mr-3">Name</label>
                            <input id="name" type="text" placeholder="Full Name"></input>
                          </li>
                          <li>
                            <label className="mr-3">Position</label>
                            <input id="position" type="text" placeholder="Position"></input>
                          </li>
                          <li>
                            <label className="mr-3">Office</label>
                            <input id="office" type="text" placeholder="Office"></input>
                          </li>
                          <li>
                            <label className="mr-3">Age</label>
                            <input id="age" type="text" placeholder="Age"></input>
                          </li>
                        </ul>
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button 
                      onClick={this.handleBtnClick}
                      id="add-employee" type="button" className="btn btn-outline-primary" data-dismiss="modal">Add</button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  };
}

export default Data;