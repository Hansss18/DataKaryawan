import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getEmployees, deleteEmployee} from "../../actions/employee-actions";

import "./employee.css";

class EmployeesListComponent extends Component {

    componentDidMount() {
        this.props.getEmployees();
    };

    deleteEmployee = (id) => {
        this.props.deleteEmployee(id);
    };

    render() {
        const {employees} = this.props.employees;

        return (
            <div>
                <h2 className="text-center mt-4">List Karyawan</h2>
                <div className="row">
                    <Link to={"/employees/add"}>
                        <button style={{marginBottom: "10px"}}
                                className="btn btn-success">Add
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead className="bg-dark" style={{color: "white"}}>
                        <tr className="notbold">
                            <th>Nama Depan</th>
                            <th>Nama Belakang</th>
                            <th>Kota</th>
                            <th>Alamat</th>
                            <th>Telephone</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee) =>
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.city}</td>
                                <td> {employee.address}</td>
                                <td> {employee.telephone}</td>
                                <td>
                                    <Link to={`/employees/${employee.id}`}>
                                        <button className="btn btn-dark">Edit</button>
                                    </Link>
                                    <Link to={`/employees/view/${employee.id}`}>
                                        <button className="btn btn-dark">Detail</button>
                                    </Link>
                                    <button onClick={() => this.deleteEmployee(employee.id)}
                                            className="btn btn-danger">Hapus</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

EmployeesListComponent.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    employees: state.employees
});

export default connect(mapStateToProps, {getEmployees, deleteEmployee})(EmployeesListComponent);