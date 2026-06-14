import './Education.css';

const Education = () => {
    return (
        <>
            <section id="education" className="mb-3 " style={{background:"#F0F4FF",padding:"60px 0",scrollMarginTop:"80px"}}>
                <div className="container">
                     <div className=" row  shadow-sm mb-3">
                    <h3 className="mb-4 text-center" style={{fontWeight:700,fontSize:"2rem",color:"#0D1B2A"}}> Education </h3>
                   
                        <div className="col-md-4 card m-2 p-2">
                            <h5> Bachelore of Electronics and Telecommunication (B.Tech)</h5>
                            <p> Jhulelal Institute of Technology ,Nagpur </p>
                            <p> 2020 - 2024 </p>
                            <strong> CGPA : 8.58/10</strong>
                        </div>

                        <div className="col-md-4 card m-2 p-2 ">
                            <h5> 12th Science </h5>
                            <p> LTRV junior college , Tumsar </p>
                            <p> 2019 - 2020 </p>
                            <strong>percentage : 85.20%</strong>                    
                        </div>
                    </div>

                    <div>
                        <h4 className="mt-5 fw-semibold" style={{color:"#0D1B2A",fontWeight:700}}>Languages Known</h4>
                        <span className="badge bg-primary me-2">English</span>
                        <span className="badge bg-primary me-2">Hindi</span>
                        <span className="badge bg-primary me-2">Marathi</span>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education