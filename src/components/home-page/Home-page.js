import React from 'react';
import './Home-page.css';
import green from '../../images/greenline.png';
import my from '../../images/po.jpg';
import pro from '../../images/Process(45%).png'
import video from '../../images/bandicam 2020-07-09 11-40-32-439.mp4'

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

            <video className="video" src={video} controls>
            
            </video>
            
            
                


            </div>
        </div>
    );
};

export default HomePage;