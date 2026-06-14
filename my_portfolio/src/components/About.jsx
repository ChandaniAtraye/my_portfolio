const About = () => {
    return (
        <>
            <section id="about" className="mb-3 " style={{background:"#F0F4FF",padding:"60px 0",scrollMarginTop:"80px"}}>
                <div className="container ">
                    <div className="row">
                        <h2 className="mb-4 text-center" style={{fontWeight:700,fontSize:"2rem",color:"#0D1B2A"}}> About Me </h2>
                        <div className="col-md-6  p-3 mt-4 mb-4  ">
                            <h3 style={{fontweight:700,color:"#0D1B2A",marginBottom:"8px"}}> Career Objective </h3>
                            <div style={{width:"50px",height:"4px",background:"#1A5CFF",borderRadius:"4px",marginBottom:"16px"}}></div>
        
                            <p style={{color:"#6B7A99",lineHeight:"1.8",fontSize:"0.95rem"}}> B.Tech graduate in ENTC (2024) with strong interest in web
                                development. Skilled in HTML, CSS, JavaScript, SQL and currently
                                learning MERN stack technologies and building
                                responsive web applications through projects. Passionate about frontend developement and eager to begin a career in the IT industry.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
export default About