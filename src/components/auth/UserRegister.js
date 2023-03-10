import React, { useState, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import { register} from '../../actions/authUser';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const UserRegister = ({ setAlert, register, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        bloodGroup: '',
        gender:'',
        emailAddress: '',
        phoneNumber: '',
        mobileNumber:'',
        address:'',
        profileImage:'',
        dateOfBirth:'',
        password: '',
        password2: ''
    });

    const {firstName,middleName,lastName,bloodGroup,gender, emailAddress,phoneNumber,mobileNumber,address,profileImage,dateOfBirth, password, password2} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    }
    if(isUserAuthenticated) {
        return <Redirect to='/appointment' />
    }

    return (
        <Fragment>
            <section id="common">
                <div className="container">
                    <div className="common-form">
                        <div className="form-side">
                            <div className="heading-common">
                            <h1><strong>User </strong>
                                <i className="fas fa-users"></i>
                            </h1>
                            </div>
                            <form onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <label className="label" for="exampleInputEmail1">First Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your First Name." 
                                    name="firstName"
                                    value={firstName}
                                    onChange={e => onChange(e)}
                                />
                                
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Middle Name</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your Middle Name." 
                                    name="middleName"
                                    value={middleName}
                                    onChange={e => onChange(e)}
                                />
                                
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Last Name</label>
                                <input 
                                    type="test"
                                    className="form-control" 
                                    placeholder="Enter your Last Name." 
                                    name="lastName"
                                    value={lastName}
                                    onChange={e => onChange(e)}
                                />
                                
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email"
                                    className="form-control" 
                                    placeholder="Enter your email address." 
                                    name="email"
                                    value={emailAddress}
                                    onChange={e => onChange(e)}
                                />
                                
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Gender</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your Gender." 
                                    name="gender"
                                    value={gender}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Date Of Birth</label>
                                <input 
                                    type="number"
                                    className="form-control" 
                                    placeholder="Enter your Date Of Birth." 
                                    name="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Blood Group</label>
                                <input 
                                    type="number"
                                    className="form-control" 
                                    placeholder="Enter your Blood Group." 
                                    name="bloodGroup"
                                    value={bloodGroup}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Phone Number</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your Phone Number." 
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Mobile Number</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your Mobile Number." 
                                    name="mobileNumber"
                                    value={mobileNumber}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Address</label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your Address." 
                                    name="address"
                                    value={address}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter password." 
                                    name="password"
                                    value={password} 
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Confirm Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter your password again." 
                                    name="password2"
                                    value={password2} 
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <input type="submit" className="btn btn-info" value="Sign Up" />
                            </form>
                        </div>
                        <div className="img-side">
                            {/* <img className="register-user" src={require("../../img/userreg.svg")} alt="" style={{height:"450px"}} /> */}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

UserRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps =state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(UserRegister);
