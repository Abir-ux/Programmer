import React from 'react';
import green from '../../images/greenline.png';
import pro from '../../images/Process(45%).png';
import my from '../../images/po.jpg';
import './Quiz.css';

const Quiz = () => {
    return (
        <div className="container">


            <nav>
                <div className="fd">
                   <p>Programing with ABIR HOSSAIN <span><img className="green" src={green} alt=""/> <img className="my" src={my} alt=""/></span></p>
                   <p><img className="pro" src={pro} alt=""/></p>
                </div>
            </nav>





            <div className="row">


                <div className="col-md-8">

                    <div className="jhg">


                    <p className="lpk"><b>1.Which is a synonym of bellicose</b></p>
                    <div className="row">

                        <div className="col-md-6">
                            <p className="kjh">warlike</p>
                            <br/>
                            <p className="kjh">alluring</p>
                        </div>
                        <div className="col-md-6">
                            <p className="kjh">constructive</p>
                            <br/>
                            <p className="kjh">repellent</p>

                        </div>



                    </div>

                    </div>
                    <br/><br/>





                    <div className="jhg">

                        <p className="lpk"><b>1.Which is a synonym of bellicose</b></p>
                        <div className="row">

                            <div className="col-md-6">
                                <p className="kjh">warlike</p>
                                <br/>
                                <p className="kjh">alluring</p>
                            </div>
                            <div className="col-md-6">
                                <p className="kjh">constructive</p>
                                <br/>
                                <p className="kjh">repellent</p>

                            </div>

                        </div>
                        



                    </div>
                    <br/><br/><br/>
                    <a href="result"><h5 className="gty">Submit</h5></a>



                    








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

        








        </div>
    );
};

export default Quiz;