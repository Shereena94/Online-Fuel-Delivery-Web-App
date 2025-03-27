import React from "react";
import Card from "react-bootstrap/Card";

const AboutUs = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* <Card className="bg-dark text-white">
      <Card.Img src={nozzleImg} alt="Card image"  />
      <Card.ImgOverlay className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Title className='fw-bolder' style={{color:"white",fontSize:"80px",backgroundColor:"black"}}>Seamless Mobility</Card.Title>
        <Card.Text  style={{color:"white",fontSize:"30px",width:"1000px",textAlign:"center"}}>
        INQAT is one of India's leading fuel delivery and vehicle service platform. We’re all about fuelling innovation through convenience, and giving you back the time.
        </Card.Text>
      </Card.ImgOverlay>
    </Card> */}
        <div
          style={{
            width:"100%",
            height: "100vh",
            backgroundImage:
              'url("https://di-uploads-pod11.dealerinspire.com/warrentontoyota/uploads/2016/05/iStock-1136053255.jpg")',
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            
          }}
        >
          <div style={{ position: "absolute", top: "40%", left:"20%" }} >
            <h2
              className="fw-bolder text-center"
              style={{
                color: "white",
                fontSize: "80px",
                backgroundColor: "black",
              }}
            >
              Seamless Mobility
            </h2>
            <p
              style={{
                color: "white",
                fontSize: "30px",
                width: "1000px",
                textAlign: "center",
                backgroundColor:"black"
              }}
            >
              {" "}
              INQAT is one of India's leading fuel delivery and vehicle service
              platform. We’re all about fuelling innovation through convenience,
              and giving you back the time.
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded mt-5">
        <h2 className="text-center mt-5 mb-5 text-warning">
          India's most loved and trusted Doorstep Service
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-lg-6 ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/h0i_niXyxsY?si=bgEIAB6kAnVvKDvE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="border rounded shadow ms-5"
            ></iframe>
          </div>

          {/* <div className="col-lg-1"></div> */}

          <div className="col-lg-6">
            <h3 className="text-warning" style={{textShadow:"2px 2px 2px"}}>
              INQAT: Fueling Convenience,{" "}
              <span style={{ color: "cyan" }}>Anywhere, Anytime!</span>
            </h3>
            <p className="fs-5 me-5" style={{fontFamily:"Arial", textAlign:"justify"}}>
              INQAT brings hassle-free fuel delivery right to your doorstep —
              whether you’re at home, work, or on the road. No more detours to
              the gas station; just tap, order, and refuel. Along with fuel
              delivery, INQAT offers battery replacement, oil changes, tire
              services, and roadside assistance, ensuring your journey is smooth
              and uninterrupted. Experience ultimate convenience with reliable
              service at your fingertips. Ready to fuel up the smart way? Choose
              INQAT — Convenience on the Move.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
