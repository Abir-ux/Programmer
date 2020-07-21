import React from 'react';
import green from '../../images/greenline.png';
import pro from '../../images/Process(45%).png';
import my from '../../images/po.jpg';
import './Result.css';
import trophy from '../../images/trophy.png';

const Result = () => {
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
                    <img className="trophy" src={trophy} alt=""/>
                    <br/><br/>
                    
                    <div className="row">
                        <div className="col-md-6">
                          <h1 className="abir"><b>5/12</b></h1>
                          <p className="mahin">Question Answered</p>
                        </div>
                        <div className="col-md-6">
                          <h1 className="arif"><b>50</b></h1>
                          <p className="mahin">Your Score</p>
                        </div>

                    </div>
                    <br/><br/>

                    <div className="row">
                        <div className="col-md-6">
                           <p className="abir1">Retake</p>
                        </div>
                        <div className="col-md-6">
                            <a href="result-coming-soon"><p className="abir2">Next</p></a>
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
                        <p className="frf"><small><span className="kjl">✔</span> Quiz</small></p>



                        
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

export default Result;