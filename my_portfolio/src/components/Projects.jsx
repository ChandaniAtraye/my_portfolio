import projectImg from '../assets/images/healthacare_website.png';
import projectImg2 from '../assets/images/portfolio_page.png';
import './Projects.css';

const Projects = () => {
    return (
        <>
            <section id="projects" className="p-3"style={{background:"#ffffff",padding:"60px 0",scrollMarginTop:"80px"}}>
                <div className="container">
                    <h2 className="mb-5 text-center"style={{fontWeight:700,fontSize:"2rem",color:"#0D1B2A"}}>Projects</h2>
                    <div id="projectCarousel" className="carousel slide mb-4" >
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-5">
                                        <img src={projectImg} className="img-fluid rounded shadow project-img" alt="Project" />
                                    </div>

                                    <div className="col-md-5 mt-4 mt-md-0 ">
                                        <h4 style={{fontWeight:700,color:"#0D1B2A",marginBottom:"8px"}}>Healthcare Website</h4>
                                        <p style={{color:"#6B7A99",fontSize:"0.9rem",marginBottom:"16px"}}>Responsive healthcare website using HTML, CSS and Bootstrap.</p>
                                        <a href="https://chandaniatraye.github.io/healthcare-hospital" style={{color:"#fff",padding:"10px 22px",borderRadius:"8px",fontWeight:600,fontSize:"0.9rem"}} className="btn btn-primary">
                                            Project Link <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-5">
                                        <img src={projectImg2} className="img-fluid rounded shadow project-img" alt="Project" />
                                    </div>

                                    <div className="col-md-5 mt-4 mt-md-0">
                                        <h4>Portfolio Website</h4>
                                        <p>Personal portfolio website created using React and Bootstrap.</p>
                                        <a href="#" className="btn btn-primary">
                                            Project Link <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev" style={{left:"-50px"}}>
                            <i className="bi bi-arrow-left-circle-fill carousel-arrow"></i>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next"style={{right:"-30px"}}>
                           <i className="bi bi-arrow-right-circle-fill carousel-arrow"></i>
                        </button>
                    </div>

                </div>
            </section>
            <hr />
        </>

    )
}
export default Projects





{/* <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body ">
                                    <h5 className="card-title">Healthcare Website (2026)</h5>
                                    <p className="card-text">Developed a responsive healthcare website using HTML, CSS and
                                        Bootstrap.
                                        Implemented multiple pages with responsive layout using
                                        Bootstrap components.
                                        Used Bootstrap grid system and components to ensure responsive
                                        design across different devices.
                                        Worked in a team to design and develop the website interface.
                                        <a href="https://chandaniatraye.github.io/healthcare-hospital/" className="btn btn-primary btn-sm" target="_blank" rel="noopner no referrer">GitHub </a>
                                    </p>

                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 mb-3">

                            <div className="card h-100 shadow-sm">
                                <div className="card-body ">

                                    <h4 className="card-title">Final year Project - Edible oil quality detection system
                                        (2023 - 2024) </h4>
                                    <p className="card-text"> Developed a system to detect adulteration in oil using the Adafruit
                                        TCS34725 color sensor.
                                        Extracted RGB values from oil samples and compared them with
                                        predefined RGB values of pure and adulterated samples.
                                        Displayed the analysis results on an I2C LCD module for easy
                                        identification.
                                    </p>
                                </div>

                            </div>
                        </div>
                    // </div> */}