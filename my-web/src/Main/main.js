import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './main.css';
import emailjs from 'emailjs-com';


class MainPage extends Component {

    state = {

    }

    componentDidMount = () => {

    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'idansweb', e.target, 'user_2eKKcMpnIYgS6IgjIP2Vs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    render() {
        return (
            <div className="Main">
                <header>
                    <a href="/"><i class="fas fa-home"></i></a>
                    <a href="#about"><i class="fas fa-user-circle"></i></a>
                    <a href="#projects"><i class="fas fa-folder-open"></i></a>
                    <a href="#skills"><i class="fas fa-bullseye"></i></a>
                    <a href="#contact"><i class="fas fa-phone-volume"></i></a>

                </header>
                <div className="background" id="home">
                    <div className="color-overlay">

                    </div>
                    <h1>Idan <span>Turjeman</span></h1>
                    <p className="Develop">Web developer</p>
                    <p className="p-contact">idanjem@gmail.com</p>
                </div>

                <div className="content">
                    <div className="about-content" id="about">
                        <h1>About</h1>
                        <p className="about-p">My name Is Idan Turjeman I am a Full-Stack Web developer with 2 years of proffesional experience.</p>
                        <p>I`m Intereseted in all kinds of Works that will help you get the great Website that you are looking for, My major focus is to learn as much as I can to be a great Creator.</p>
                        <p className="about-p-buttom"> I’m a skilled in many areas of design and development. Some of my skills include :</p>
                        <div className="row">
                            <div className="col-6">
                                <i class="fas fa-check"></i><p>JavaScript,</p>
                                <i class="fas fa-check"></i><p>HTML,</p>
                                <i class="fas fa-check"></i><p>CSS,</p>
                                <i class="fas fa-check"></i><p>AJAX API,</p>
                                <i class="fas fa-check"></i><p>OOP,</p>
                                <i class="fas fa-check"></i><p>PHP,</p>

                            </div>
                            <div className="col-6">
                                <i class="fas fa-check"></i><p>React,</p>
                                <i class="fas fa-check"></i><p>Angular,</p>
                                <i class="fas fa-check"></i><p>Node.js,</p>
                                <i class="fas fa-check"></i><p>jQuery,</p>
                                <i class="fas fa-check"></i><p>TypeScript,</p>
                                <i class="fas fa-check"></i><p>MongoDB,</p>
                            </div>
                        </div>
                        <a href="#contact"><button type="button" className="about-btn btn btn-light">Hire ME</button></a>
                        <div className="profile-image"></div>
                    </div>

                    <div className="project-content" id="projects">
                        <h1>My project</h1>
                        <div className="row mt-5">
                            <div className="col-3">
                                <div className="card">
                                    <div className="front">
                                        <div className="project-image1"></div>
                                    </div>
                                    <div className="back">
                                        <div className="back-content middle">
                                            <h2>Project 1</h2>
                                            <span>YOutube</span>
                                            <div className="sm">
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="front">
                                        <div className="project-image1"></div>
                                    </div>
                                    <div className="back">
                                        <div className="back-content middle">
                                            <h2>Project 1</h2>
                                            <span>YOutube</span>
                                            <div className="sm">
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="front">
                                        <div className="project-image1"></div>
                                    </div>
                                    <div className="back">
                                        <div className="back-content middle">
                                            <h2>Project 1</h2>
                                            <span>YOutube</span>
                                            <div className="sm">
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="front">
                                        <div className="project-image1"></div>
                                    </div>
                                    <div className="back">
                                        <div className="back-content middle">
                                            <h2>Project 1</h2>
                                            <span>YOutube</span>
                                            <div className="sm">
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                                <a href="#"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-content" id="skills">
                        <div className="header">
                            <h1>My Skills</h1>
                        </div>
                        <div className="container">
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-html5"></i>
                                    </div>
                                    <h3>HTML 5</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-css3-alt"></i>
                                    </div>
                                    <h3>CSS 3</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-react"></i>
                                    </div>
                                    <h3>React</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-angular"></i>
                                    </div>
                                    <h3>Angular</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-bootstrap"></i>
                                    </div>
                                    <h3>Bootstrap</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-php"></i>
                                    </div>
                                    <h3>PHP</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-node-js"></i>
                                    </div>
                                    <h3>Node.JS</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-sass"></i>
                                    </div>
                                    <h3>Sass</h3>
                                </div>
                                <p></p>
                            </div>
                            <div className="skill-box">
                                <div className="skill-title">
                                    <div className="img">
                                        <i class="skill-icon fab fa-js-square"></i>
                                    </div>
                                    <h3>JavaScript</h3>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content" id="contact">
                        <div className="color-overlay"></div>
                        <h1>Get In Touch</h1>

                        <div className="contact-info">
                            <div className="item">
                                <i className="icon fas fa-home"></i>
                                 Zichron Yaakov, Israel

                                 <br></br>
                                <i className="icon fas fa-phone"></i>
                                 +972 54-243-6753

                                 <br></br>
                                <i className="icon fas fa-envelope"></i>
                                 idanjem@gmail.com

                            </div>
                        </div>

                        <form className="contact-form" onSubmit={this.sendEmail}>

                            <input type="text" className="contact-from-text" placeholder="Name" name="name" />
                            <input type="email" className="contact-from-text" placeholder="Email" name="email" />
                            <input type="text" className="contact-from-text" placeholder="Subject" name="subject" />
                            <textarea className="contact-from-text" placeholder="Your Message" name="message" rows="5" cols="30" required></textarea>
                            <button type="submit" className=" contact-from-text btn btn-dark text-light">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage