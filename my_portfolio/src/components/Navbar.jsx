import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav id= "header" className="navbar navbar-expand-lg shadow-sm p-2" style={{background:"rgba(13,27,42,0.85)",fontSize:18,backdropFilter:"blur(12px)",position:"fixed",top:0,width:"100%",zIndex:999}}  data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" style={{color:"#ffffff",fontWeight:700}} href="#">Chandani <span style={{color:"#00C2CB"}}>Atraye</span> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
               <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#education">Education</a>
              </li>
              
              {/* <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#services">Services</a>
              </li> */}
             
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">Contact </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar