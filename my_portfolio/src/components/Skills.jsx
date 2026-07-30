import HtmlImage from "../assets/images/html.png";
import CssImage from "../assets/images/css-3.png";
import JsImage from "../assets/images/java-script.png";
import DbImage from "../assets/images/mysql-original.svg";
import ReactImage from "../assets/images/React-icon.svg";
import mongoDBImage from "../assets/images/MongoDB_Logo.svg";
import NodeImage from "../assets/images/Node.js_logo.svg";
import gitImage from "../assets/images/git.svg";
import githubImage from "../assets/images/github.svg";

import "./Skills.css"

const Skills = () => {
    return (
        <>
            <section id="skills" className="mb-3 " style={{background:"#F0F4FF",padding:"60px 0",scrollMarginTop:"80px"}}>
                <div className="container">
                    <h3 className="mb-4 text-center" style={{fontWeight:700,fontSize:"2rem",color:"#0D1B2A"}}>My Skills</h3>
                    
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <div className=" c1 h-100">
                                <img src={HtmlImage} className=" image card-img-top" alt="HTML_img"/>
                                <div className="card-body">
                                    <p className="card-text">Semantic webpage structure and responsive layouts.</p>
                                </div>
                            </div>

                        </div> 
                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={CssImage} className=" image card-img-top" alt="Css_img"  />
                                <div className="card-body">
                                    <p className="card-text">Styling modern responsive websites using CSS and Flexbox.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={JsImage} className=" image card-img-top" alt="Js_img" />
                                <div className="card-body">
                                    <p className="card-text">Adding interactivity and dynamic functionality to web pages .</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={ReactImage} className=" image card-img-top" alt="Js_img" />
                                <div className="card-body">
                                    <p className="card-text">Develops fast, reusable and component based user interfaces using React.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={mongoDBImage} className=" image card-img-top" alt="Js_img" />
                                <div className="card-body">
                                    <p className="card-text">Stores and manages NoSQL data using collections and documents.</p>
                                </div>
                            </div>

                        </div>
                        
                        
                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={DbImage} className=" image card-img-top" alt="Db_img" />
                                <div className="card-body">
                                    <p className="card-text">Managing and querying relational databases using SQL.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={NodeImage} className=" image card-img-top" alt="Db_img" />
                                <div className="card-body">
                                    <p className="card-text">Creates scalable server side applications and REST APIs.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={gitImage} className=" image card-img-top" alt="Db_img" />
                                <div className="card-body">
                                    <p className="card-text">Tracks code changes and manages version control efficiently.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3  mb-2">
                            <div className=" c1 h-100">
                                <img src={githubImage} className=" image card-img-top" alt="Db_img" />
                                <div className="card-body">
                                    <p className="card-text">Hosts code repositories and enables collaboration using Git.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr/>
        </>
    )
}
export default Skills