import './About.css'
const About = () => {
    return (
        <>
            <section id="about" className="mb-3 " style={{ background: "#F0F4FF", padding: "60px 0", scrollMarginTop: "80px" }}>
                <div className="container ">
                    <div className="row">
                        <h2 className="mb-4 text-center" style={{ fontWeight: 700, fontSize: "2rem", color: "#0D1B2A" }}> About Me </h2>
                        <div className="col-md-6  p-3 mt-4 mb-4  ">
                            <h3 style={{ fontweight: 700, color: "#0D1B2A", marginBottom: "8px" }}> Career Objective </h3>
                            <div style={{ width: "50px", height: "4px", background: "#1A5CFF", borderRadius: "4px", marginBottom: "16px" }}></div>

                            <p style={{ color: "#6B7A99", lineHeight: "1.8", fontSize: "0.95rem" }}>
                                I am a B.Tech graduate in Electronics & Telecommunication (2024) certified in MERN Stack Development. I build responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, Node.js and MongoDB.

                                I have hands-on experience deploying live projects including a healthcare website and personal portfolio. I bring a quality-focused approach and strong problem-solving mindset to every project I work on.

                                Currently seeking Frontend/Software Developer opportunities where I can contribute my skills, grow as a developer and build impactful web solutions.
                            </p>

                        </div>

                        <div className="col-md-6  p-3 mt-4 mb-4 ">
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    🎓 <span>B.Tech in Electronics & Telecommunication (2024)</span>
                                </div>
                                <div className="highlight-item">
                                    💻 <span>MERN Stack Certified</span>
                                </div>
                                <div className="highlight-item">
                                    🌐 <span>Frontend / Software Developer</span>
                                </div>
                                <div className="highlight-item">
                                    📍 <span>Pune, India</span>
                                </div>
                                <div className="highlight-item">
                                    🔗 <span>Open to Work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
export default About