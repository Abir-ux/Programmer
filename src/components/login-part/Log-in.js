import React from 'react';
import './Log-in.css'
import logo from '../../images/my-logo.png';
import sidepic from '../../images/register-photo.png';

const Login = () => {
    return (
        <div className="login">
            <p className="pera"><img className="img2" src={logo} alt=""/><b>PROGRAMMING WITH ABIR</b></p>
            <br/><br/>
           <div className="container">
           <div className="row">
                <div className="col-md-6 colpa">

                    <h2 className="reg">Login</h2>
                    <br/>

                    <p>Email or Phone</p>
                    <input className="input1" type="text"/>
                    <br/><br/>

                    <p>Password</p>
                    <input className="input1" type="text"/>
                    <br/><br/>


                    <p><small>remember me <span className="forget">forgot password</span></small></p>

                    
                    <br/><br/>
                    <a href="/home-page"><button className="btn1">Login -> </button></a>
                    




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

export default Login;