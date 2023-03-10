import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getEmployeeById} from "../../actions/employee-actions";

class EmployeeViewComponent extends Component {

    componentDidMount() {
        this.props.getEmployeeById(this.props.match.params.id);
    };

    render() {
        const {firstName, lastName, city, address, telephone} = this.props.employee;

        return (
            <div>
                <br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Detail</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="mr-2">Nama Depan : </div>
                            <div>{firstName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Nama Belakang :</div>
                            <div>{lastName}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Kota :</div>
                            <div>{city}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Alamat :</div>
                            <div>{address}</div>
                        </div>
                        <div className="row">
                            <div className="mr-2">Telephone :</div>
                            <div>{telephone}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EmployeeViewComponent.propTypes = {
    getEmployeeById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    employee: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors,
    employee: state.employees.employee
});

export default connect(mapStateToProps, {getEmployeeById})(EmployeeViewComponent);