import React from 'react'
const contactInput = {
    background:"rgba(255,255,255,0.06)",
    border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:"8px",
    color:"#ffffff",
    padding:"12px 14px"

}
const textArea={
    background:"rgba(255,255,255,0.06)",
    border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:"8px",
    color:"#ffffff",
    padding:"12px 14px",
    minHeight:"110px"

}
const sendbtn={
    background:"#1A5CFF",
    color:"#fff",
    borderRadius:"8px",
    padding:"10px 15px",
    fontSize:"0.9rem",
    fontWeight:600,
    border:"none",
    

}

const Contact = () => {
    
  return (
    <>
     <section id="contact" className="mb-3 border border-rounded py-5" style={{background:"#0D1B2A",padding:"60px 0",scrollMarginTop:"80px"}}>
            <form>
                <div className="container ">
                    <div className="row d-flex justify-content-center">
                        <div className="text-center mb-2">
                            <h3 style={{fontWeight:700,fontSize:"2rem",color:"#ffffff"}}> Contact me </h3>
                        <p style={{color:"#00C2CB",fontSize:"0.85rem",letterSpacing:"0.08em"}}>GET IN TOUCH</p>

                        </div>
                        <p className="text-center" style={{color:"rgba(255,255,255,0.5)",marginBottom:"24px"}}>I am open to frontend roles and internships.</p>
 
                        <div className=" col-12 col-md-4 fs-5 mt-4 mb-4 ">
                            <a href="mailto:chandaniatraye5010@gmail.com" className="text-decoration-none" style={{wordBreak:"break-all"}}><i className="bi bi-envelope-fill fs-3 me-2"></i> chandaniatraye5010@gmail.com</a> <br></br>
                            <a href="https://www.linkedin.com/in/chandani-atraye"className="text-decoration-none"><i className="bi bi-linkedin me-2"></i> LinkedIn</a><br></br>
                            <a href="https://www.github.com/in/chandani-atraye"className="text-decoration-none"><i className="bi bi-github me-2"></i> GitHub</a>
                        </div>
                        
                        <div className="col-12 col-md-6 mt-3  info_form">
                            <div className="row p-3">
                                <div className="col-md-10 mb-3">
                                    <label for="forname" className="form-label " style={{color:"rgba(255,255,255,0.5)"}}>Enter full name</label>
                                    <input type="text" className="form-control" style={contactInput} id="forname" placeholder="Enter name"/>
                                </div>
                                <div className="col-md-10  mb-3">
                                    <label for="forname" className="form-label" style={{color:"rgba(255,255,255,0.5)"}}>Enter email address</label>
                                    <input type="email" className="form-control"style={contactInput} id="forname" placeholder="Enter Email"/>
                                </div>
                                <div className="col-md-10 mb-3">
                                    <label for="fornumber" className="form-label" style={{color:"rgba(255,255,255,0.5)"}}>Enter number</label>
                                    <input type="number" className="form-control"style={contactInput} id="fornumber" placeholder="Enter number"/>
                                </div>
                                
                                <div className="col-md-12 mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label"style={{color:"rgba(255,255,255,0.5)"}} >Message</label>
                                    <textarea className="form-control"style={textArea} id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div className="col-md-3">
                                    <button className=" btn btn-primary" style={sendbtn}>Send Message</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </form>
            

        </section>
    
    </>
  )
}

export default Contact


