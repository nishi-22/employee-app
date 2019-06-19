import React, {Component} from 'react';
import EmployeeTable from './components/employee-table/employeeTable';
import './App.css';

class App extends Component {
    state = {
        data: [{
            "id": 1,
            "ename": "Smith",
            "designation": "Lab Assistant",
            "department": "Lab"
        },
            {
                "id": 2,
                "ename": "Chin Yen",
                "designation": "Lab Assistant",
                "department": "Lab"
            },
            {
                "id": 3,
                "ename": "Mike Pearl",
                "designation": "Senior Accountant",
                "department": "Accounts"
            },
            {
                "id": 4,
                "ename": "Green Field",
                "designation": "Accountant",
                "department": "Accounts"
            },
            {
                "id": 5,
                "ename": "Dewane Paul",
                "designation": "Programmer",
                "department": "IT"
            },
            {
                "id": 6,
                "ename": "Matts",
                "designation": "SR. Programmer",
                "department": "IT"
            },
            {
                "id": 7,
                "ename": "Plank Oto",
                "designation": "Accountant",
                "department": "Accounts"
            }]
    };

    deleteRow = (rowIndex) => {
        this.setState({
            products: this.state.data.splice(rowIndex, 1)
        });
    }

    render() {
        return (
            <div className="App">
                <EmployeeTable tableData={this.state.data} deleteRow={this.deleteRow}/>
            </div>
        );
    }

}

export default App;