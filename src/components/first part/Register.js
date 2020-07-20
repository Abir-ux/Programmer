import React from 'react';
import logo from '../../images/my-logo.png';
import sidepic from '../../images/register-photo.png';
import reg from '../../images/93.png'
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <p className="pera"><img className="img2" src={logo} alt=""/><b>PROGRAMMING WITH ABIR</b></p>
            <br/><br/>
           <div className="container">
           <div className="row">
                <div className="col-md-6 colpa">

                    <h2 className="reg">Register</h2>
                    <br/>

                    <p>Name</p>
                    <input className="input1" type="text"/>
                    <br/><br/>

                    <p>Email</p>
                    <input className="input1" type="text"/>
                    <br/><br/>

                    <p>Phone No.</p>
                    <input className="input1" type="text"/>
                    <br/><br/>

                    <p>Password</p>
                    <input className="input1" type="text"/>
                    <br/><br/>

                    <a href="/login"><button className="btn1">Register -> </button></a>
                    <br/><br/>




                </div>
                <div className="col-md-6">
                    <img className="img1" src={sidepic} alt=""/>
                </div>
            </div>
            <br/><br/><br/><br/>
           </div>
        </div>
    );
};

export default Register;