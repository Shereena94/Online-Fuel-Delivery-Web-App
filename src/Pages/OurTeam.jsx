import React from "react";

const OurTeam = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/teamwork-concept-close-up-group-business-people-putting-their-hands-together-team-members-putting-hands-together-closeup-top-view-no-visible-faces-ai-generated_585735-5666.jpg")',
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div style={{ position: "absolute", top: "40%", left: "20%" }}>
          <h2
            className="fw-bolder text-center"
            style={{
              color: "orange",
              fontSize: "80px",
              fontFamily: "Arial",
            }}
          >
            Leadership Team
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "30px",
              width: "1000px",
              textAlign: "center",
              fontFamily: "Arial",
            }}
          >
            {" "}
            We serve hundreds of partners worldwide, including resellers,
            distributors, installers, car manufacturers, and more. Partnering
            with us is simple: we offer a range of charging solutions tailored
            to your business model.
          </p>
        </div>
      </div>

      {/* ceo,president,manager */}

      <div className="d-flex justify-content-center align-items-center">
        {/* <div className="col-lg-3"></div> */}
        <div className="col-lg-3">
          <img
            src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/09/29/Photos/Processed/jhsdyhtrr-kQ0D--621x414@LiveMint.jpg"
            alt="cofounder"
            style={{ width: "350px", height: "250px" }}
            className="mt-5"
          />
        </div>
        <div className="col-lg-3 mt-5">
          <h4>Adnan Kidwai</h4>

          <p>Co-Founder & International CEO</p>
          <p>
            Adnan Kidwai is the Co-Founder & International CEO at Inqat, the
            largest Doorstep Online Fuel Delivery company in India.
          </p>
        </div>

        {/* <div className="col-lg-3"></div> */}
      </div>

     
      <div className="d-flex justify-content-center align-items-center">
        {/* <div className="col-lg-1"></div> */}

        <div className="col-lg-2 ">
          <img
            src="https://assets.gqindia.com/photos/5f9039547f0af5175e0fafbe/master/w_1600%2Cc_limit/Indian%2520women%2520businesswomen%2520Vinati%2520Saraf%2520Mutreja.jpg"
            alt="president"
            style={{ width: "250px", height: "250px" }}
            className="mt-5"
          />
        </div>
        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-2 mt-5 ms-5" >
          {" "}
          <h4>Ankitha Sharma</h4>
          <p>HR Executive</p>
          <p>
          Sunil Maddala is the President – FuelBuddy. He brings a wealth of experience to Inqat.
          </p>
        </div>
            <div className="col-lg-1"></div>
       

        <div className="col-lg-2">
          <img
            src="https://www.theenews.in/wp-content/uploads/2020/11/amway-indias-arjun-dasoondi-features-in-indias-top-100-great-people-managers-485x400.jpg"
            alt=""
            style={{ width: "250px", height: "250px" }}
            className="mt-5"
          />
        </div>
        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-2 mt-5 ms-5">
          {" "}
          <h4>Ram Thilak</h4>
          <p>General Manager</p>
          <p>
          Neeraj Gupta holds the position of India CEO at Inqat. Neeraj’s academic qualifications include a master’s degree from IMI Belgium
          </p>
        </div>

        {/* <div className="col-lg-1"></div> */}
      </div>
    </>
  );
};

export default OurTeam;
