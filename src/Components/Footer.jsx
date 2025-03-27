import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (

    <div className="row ms-5 mt-5">
    {/* INTRO */}
    <div className="col-4" >
      <h3>
         INQAT
      </h3>
      <p >
     
Our innovative delivery services backed by IoT-based products are meticulously crafted to cater to the specific requirements of diverse businesses.
We prioritize delivering a seamless customer experience while offering swift and hassle-free payment options.
      </p>
      <p><a style={{textDecoration:"none",cursor:"pointer"}} className='text-success'>Terms & Conditions</a></p>
      <p>©2025 Inqat, All Rights Reserved.</p>
    </div>

    
    {/* LINKS */}
    <div className="col-2 mt-5">
      <Link to={"/"} style={{ textDecoration: "none",color:"white"}}>
        Home Page
      </Link>
      <br />
      <Link to={"/aboutus"} style={{ textDecoration: "none",color:"white" }}>
        About Us
      </Link>
      <br />
      <Link to={"/ourteam"} style={{ textDecoration: "none",color:"white" }}>
        Our Team 
      </Link> <br />
      <Link to={"/community"} style={{ textDecoration: "none",color:"white" }}>
      Community 
      </Link>
    </div>


    {/* Apps */}
    <div className="col-2">
      <h4>INQAT App</h4>
      {/* <a href="" style={{textDecoration:"none",color:"white"}}>React</a><br /> */}
      <a href="" style={{textDecoration:"none",color:"white"}}><img className='w-75 ms-1' src="https://vectorified.com/images/app-store-google-play-icon-39.png"/></a><br />

      {/* <a href="" style={{textDecoration:"none",color:"white"}}> React Bootstrap</a><br /> */}

      
    </div>

    {/* FOR SPACING */}

    <div className="col-1"></div>


    {/* CONTACT */}
    <div className="col-3">
      <h4>Quick Contact</h4>
      <input
        type="text"
        className="border rounded-2"
        placeholder="Enter your Email here !!"
        style={{ height: "30px" }}
      />
      <button
        className="btn-info m-2 border-info rounded-3"
        style={{ width: "40px", color: "white", height: "30px" }}
      >
        {" "}
        <i className="fa-solid fa-arrow-right"></i>{" "}
      </button>
      <div className="d-flex">
        <i className="fa-brands fa-twitter m-1 ms-3"></i>
        <i className="fa-brands fa-instagram m-1 ms-4"></i>
        <i className="fa-brands fa-facebook-f m-1 ms-4"></i>
        <i className="fa-brands fa-linkedin m-1 ms-4"></i>
        <i className="fa-brands fa-github m-1 ms-4"></i>
        <i className="fa-solid fa-phone m-1 ms-4"></i>
      </div>
    </div>
   
  </div>
  )
}

export default Footer