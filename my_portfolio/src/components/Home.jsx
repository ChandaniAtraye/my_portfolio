import React from 'react'
import profile from "../assets/images/portfolio_img.jpg";
import "./Home.css";

const Home = () => {
    return (
        <>
            <section id="home" className="mb-3" style={{ background: "linear-Gradient(135deg,#0D1B2A 0%, #0a2a5e 60%, #0D1B2A 100%)",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:"80px" }}>
                <div className="container">
                    <div className="row">
                        <div className=" intro col-md-6 p-4">
                            <h1> Hi, I am Chandani Atraye </h1>
                            <p>“My goal is not to be better than anyone else, but to be better then I used to be.”</p>
                            <h4> Frontend Developer | React.js Developer</h4>
                            <p>Building responsive and user-friendly web applications.</p>
                            <div className="social">
                                <a className="text-white" href="mailto:chandaniatraye5010@gmail.com">Email</a>
                                <span className="mx-2 text-white">|</span>
                                <a className="text-white" href="tel:9021764530">Phone</a>
                                <span className="mx-2 text-white">|</span>
                                <a className="text-white" href="https://www.linkedin.com/in/chandani-atraye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                 <span className="mx-2 text-white">|</span>
                                <a className="text-white" href="https://github.com/ChandaniAtraye" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>  

                                <div className="mt-3">
                                    <a href="/Chandani_atraye.pdf" download className=" btn1 ">Download Resume</a>
                                    <a href="#contact" className=" btn1 ">Contact Me </a>
                                </div>
                           
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">
                            <img src={profile} alt="profile" className="profile_img " />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Home