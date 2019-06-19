import React, {Component} from 'react';

class EmployeeTable extends Component {

    renderRow = () => {
        return this.props.tableData.map((data, index) =>
            <tr key = {data.id}>
                <td>{data.id}</td>
                <td>{data.ename}</td>
                <td>{data.designation}</td>
                <td>{data.department}</td>
                <td><button className="btn btn-dark" onClick={() => this.props.deleteRow(index)}>Delete</button></td>
            </tr>
        )
    }

    render() {
        return (
            <div className="m-5">
                <table className="table table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRow()}
                    </tbody>
                </table>
            </div>

        );
    }

}

export default EmployeeTable;