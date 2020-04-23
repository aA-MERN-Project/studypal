import React from 'react';
import NavBar from '../navbar/navbar_container';
import '../../reset.css';
import './team.css';
import {Link} from 'react-router-dom';

class CrewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render(){
      return(
          <div className="teamPage">
             <NavBar/>
             
             <div className="team-outer-div">
                 <br/>
                 <br/> 
               


                <div className="row crewHeader"><h2>The Crew</h2></div>
                <div className="row">
                    
                    <div className="col-developer  first developer">
                        <h2 className="CrewName">Andy Tran</h2>
                        <h3 className="crewTitle">Fullstack Developer</h3>
                        <h3 className="crewTitle">Backend Lead</h3>
                        <div className="crewPicDiv">
                            <div className="andyPicDiv">
                            </div>
                        </div>
                        
                        <div className="teamIcons">
                            <a target="_blank" href="https://www.linkedin.com/in/andy139/" >
                                <img className="linkedIn teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png" alt="Andy's linkedIn"/>
                            </a>
                            &nbsp;
                            <a target="_blank" href="https://angel.co/u/andy-tran-32" >
                                <img className="angelCo teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/angelListIcon.png" alt="Andy's angel account"/>
                            </a>
                            &nbsp;
                            <a target="_blank" href="https://github.com/andy139" >
                                <img className="github teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/GitHub.png" alt="Andy's github"/>

                            </a>
                        </div>
                    </div> 

                    <div className="col-developer  developer">
                        <h2 className="CrewName">Wilson Ngu</h2>
                        <h3  className="crewTitle">Fullstack Developer</h3>
                        <h3 className="crewTitle">Frontend Lead</h3>
                        <div className="crewPicDiv">
                            <div className="wilsonPicDiv">
                            </div>
                        </div>
                        <div className="teamIcons">
                              <a target="_blank" href="https://www.linkedin.com/in/wilson-ngu/" >
                                 <img className="linkedIn teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png" alt="Wilson's linkedIn"/>
                            </a>
                            &nbsp;
                            <a target="_blank" href="https://angel.co/u/wilson-ngu" >
                                <img className="angelCo teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/angelListIcon.png" alt="Wilson's angel"/>
                            </a>
                            &nbsp;
                            <a target="_blank" href="https://github.com/Heyitswilson" >
                                <img className="github teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/GitHub.png" alt="Wilson's github"/>
                            </a>

                        </div>
                    </div> 

                    <div className="col-developer  developer">
                        <h2 className="CrewName">Fei Yang</h2>
                        <h3 className="crewTitle">Fullstack Developer</h3>
                        <h3 className="crewTitle">Backend, Frontend</h3>
                        <div className="crewPicDiv">
                            <div className="feiPicDiv">
                            </div>
                        </div>
                        <div className="teamIcons">
                            <a target="_blank" href="https://www.linkedin.com/in/fei-yang-4958261a4/" >
                            <img className="linkedIn teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png" alt="Fei's linkedIn"/>

                            </a>
                            &nbsp;
                            <a target="_blank"  href="https://angel.co/u/fei-yang-4" >
                                <img className="angelCo teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/angelListIcon.png" alt="Fei's Angel.co"/>  
                            </a>
                            &nbsp;
                            <a target="_blank" href="https://github.com/FeiYGH" >
                                <img className="github teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/GitHub.png" alt="Fei's Github"/>
                            </a>

                        </div>
                    </div> 

                    <div className="col-developer last developer"> 
                        <h2 className="CrewName">Joanna Jao</h2>
                        <h3 className="crewTitle">UI Designer</h3>
                        <h3 className="crewTitle">Product Lead</h3>
                        <div className="crewPicDiv">
                            <div className="joannaPicDiv">
                            </div>
                        </div>
                        <div className="teamIcons">
                        <a target="_blank" href="https://www.linkedin.com/in/joannajao/" >
                            <img className="linkedIn teamIcon" src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png" alt="Joanna's linkedIn"/>
                            </a>
                        </div>
                    </div> 
                </div>
             </div>

          </div>
      )
  }

}

export default CrewPage;