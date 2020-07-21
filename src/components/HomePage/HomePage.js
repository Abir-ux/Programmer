import React from 'react';
import './HomePage.css';
import green from '../../images/greenline.png';
import my from '../../images/po.jpg';
import pro from '../../images/Process(45%).png'
import video from '../../images/bandicam 2020-07-20 17-59-15-805.mp4';

const HomePage = () => {
    return (
        <div>
            <div className="container">



            <nav>
                <div className="fd">
                   <p>Programing with ABIR HOSSAIN <span><img className="green" src={green} alt=""/> <img className="my" src={my} alt=""/></span></p>
                   <p><img className="pro" src={pro} alt=""/></p>
                </div>
            </nav>

            <div className="row">
                <div className="col-md-8">
                     <video className="video" src={video} controls>
            
                     </video>
                     <br/>

                     <p><b>3. HTML Module Summary</b></p>
                     <p><small>Hi, I am Abir. Probably I known as a web developer.I am a Student of Milestone College. I am currently studying in class nine. I have enrolled a course name Bangla Web Development course which is organized by Programming Hero company .I want to be a Web Developer in future life. I have knowledge about some programming language like CSS,HTML,Java, Python etc.I am optimistic & always hope for best.</small></p>

                    <p className="jkl">⚠ copy write warning</p>

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
                        <p><small><span className="kjl">✔</span> Quiz</small></p>



                        
                        <div className="fds">

                            <p><b>Module 2: PowerPoint - Why should you learn it?</b></p>
                            <p><small>15min . 0/3</small></p>


                        </div>
                        <br/>


                        <div className="frf">

                            <p><small>⏩ 3.Html Module Summary</small></p>

                        </div>
                        <br/>

                        <a href="Quiz"><p className="jnj"><small>🏆 Quiz</small></p></a>
                        <p><small>🏆 5.important-difference between versions</small></p>




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
        </div>
    
    );
};

export default HomePage;