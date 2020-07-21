import React from 'react';
import green from '../../images/greenline.png';
import pro from '../../images/Process(45%).png';
import my from '../../images/po.jpg';
import pana from '../../images/Work time-pana (-1@2x.png';
import a22 from '../../images/22.png';
import a34 from '../../images/34.png';
import a12 from '../../images/12.png';
import a00 from '../../images/00.png';


import './NextResult.css';


const NextResult = () => {
    return (
        <div className="container">

            <nav>
                <div className="fd">
                   <p>Programing with ABIR HOSSAIN <span><img className="green" src={green} alt=""/> <img className="my" src={my} alt=""/></span></p>
                   <p><img className="pro" src={pro} alt=""/></p>
                </div>
            </nav>



            <div className="row">

                <div className="col-md-8 vbn">

                    <img className="iuy" src={pana} alt=""/>
                    <br/><br/>
                    <p className="hjk"><small>Section Will be Available in 22 hours, 7 minutes</small></p>

                    <br/><br/><br/>


                    <div className="row">

                        <div className="col-md-3">
                            <img className="img12" src={a00} alt=""/>

                        </div>
                        <div className="col-md-3">
                         <img className="img12" src={a22} alt=""/>


                        </div>
                        <div className="col-md-3">
                         <img className="img12" src={a34} alt=""/>

                        </div>
                        <div className="col-md-3">
                           <img className="img12" src={a12} alt=""/>

                        </div>


                    </div>








                </div>



                <div className="col-md-4">







                <h5>Course content</h5>
                    <br/>
                    <div className="left">
                        <p><b>Milestone 01</b></p>
                        <p><small>55 min . 5 module</small></p>
                        <br/>

                        <div className="fds">

                            <p><b>Milestone 1: Introduction</b></p>
                            <p><small>5min . 1/2</small></p>

                        </div>


                        <p><small><span className="kjl">✔</span> 1.Hello world!</small></p>
                        <p className=""><small><span className="kjl">✔</span> Quiz</small></p>



                        
                        <div className="fds">

                            <p><b>Module 2: PowerPoint - Why should you learn it?</b></p>
                            <p><small>15min . 0/3</small></p>


                        </div>
                        <br/>


                        <div className="">

                        

                       </div>
                          




                    </div>
                    <br/>
                    

                    <div className="left"> 
                    
                        <p><b>Milestone 02</b></p>
                        <p><small>55min . 5 module</small></p>


                    </div>
                    <br/><br/>


                    <div className="left"> 
                    
                        <p><b>Milestone 03</b></p>
                        <p><small>55min . 5 module</small></p>


                   </div>
                   <br/><br/>









                </div>






            </div>
            <br/><br/>






        </div>
    );
};

export default NextResult;