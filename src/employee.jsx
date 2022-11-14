import React from "react";

function Employee(props) {
    return <div>
        <h1>Raju</h1>
        <p>hardworking and loyal Employee</p>
        <ol>
            <li>{props.gender}</li>
            <li>{props.dob}</li>
            <li>{props.sal}</li>

        </ol>
    </div>;
}

export default Employee;