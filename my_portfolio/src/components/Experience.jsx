import React from 'react'
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="mb-4" style={{background:"#F0F4FF",padding:"60px 0",scrollMarginTop:"80px"}}>
            <div className="container">
                <h2 className="text-center mb-5 " style={{fontWeight:700}} >Experience</h2>
                <div className="row d-flex justify-content-center">
                    <div className=" col-md-5 card exp1 m-2 p-2" style={{ width: "18rem;" }}>
                        <div className="card-body">
                            <h3 className="heading">Production Trainer </h3>
                            <h6 className=" mb-2 ">Pune,maharashtra, India</h6>
                            <strong>Dec 2025 - Oct 2025</strong>
                            <p className="card-text">Trained 100+ employees on PCB assembly, motor integration, and final product testing;    reduced onboarding time through
                                structured knowledge-transfer programs.
                            </p>
                        </div>
                    </div>


                     <div className=" col-md-5 card exp2 m-2 p-2" style={{ width: "18rem;" }}>
                        <div className="card-body">
                            <h3 className="heading">Quality Assurance Engineer </h3>
                            <h6 className=" mb-2 ">Pune,maharashtra, India</h6>
                            <strong>Mar 2025 - May 2025</strong>
                            <p className="card-text">Inspected and tested automotive wiring harnesses; detected defects (incorrect wiring, loose connections, insulation faults)
                            to ensure compliance with quality standards
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Experience