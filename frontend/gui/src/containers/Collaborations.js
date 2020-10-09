import React from "react";
import Wave from './images/topwaveq.png'
import InfiniteCarousel from 'react-leaf-carousel';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import {MDBCard, MDBCardBody, MDBMask, MDBView} from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCardImage, MDBCardText} from "mdbreact";

class Collaborations extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${Wave})`,backgroundRepeat: 'no-repeat',width:'100vw',backgroundSize:"100%"}}>
      
      <div style={{padding:"10vw 10vw 0px 5vw" }}>
        
        
        <MDBCardBody className="my-0 px-5 pb-5 text-left">
                    <MDBRow style={{width:"95%"}}>
                    <MDBCol lg="12">
                        <h3 style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"36px"}} className="font-weight-bold mb-3 p-0">
                        <strong><b>COLLABORATIONS</b></strong>
                        </h3>
                        <hr style={{width:"55px", border:"2px solid #016B86", borderRadius:"2px",margin:"0px"}} />
                        <br></br>
                    </MDBCol>
                    </MDBRow>
                    <br></br>
                    <MDBRow>
                        <MDBCol>
                          <h3 style={{color:"#016B86",fontFamily:"Montserrat", fontSize:"25px"}} className="font-weight-bold mb-3 p-0">
                          <strong>Out Loud Partners</strong>
                          </h3>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <MDBCol lg="6"> 
                         
                        <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                        Over a course of two months, we worked with organisations and companies like Center for Internet and Society and Trilegal, and lawyers like Dr. Aditya Sondhi, Mr. Gopal Sankaranarayanan, and Ms. Kiruba Munusamy. Each of these individuals and organisations have added value to our goal of disseminating legal information. 
                        </p>

                        <br></br>
                    </MDBCol>
                    <MDBCol lg="6">
                    <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 300,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 405,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 726,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
              ]}
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={3}
              slidesToShow={3}
              scrollOnDevice={true}
              autoCycle={false}
          
            >
              <div>
                  <img
                    style={{
                      width: "150px",
                      height: "169px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/c1.png")}
                  />
              </div>
              <div>
                  <img
                    style={{
                      width: "150px",
                      height: "169px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/c2.png")}
                  />
              </div>
              <div>
                  <img
                    style={{
                      width: "150px",
                      height: "169px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/c3.png")}
                  />
              </div>
              <div>
                  <img
                    style={{
                      width: "150px",
                      height: "169px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/c4.png")}
                  />
              </div>
              <div>
                  <img
                    style={{
                      width: "150px",
                      height: "169px",
                      borderRadius: "10%",
                    }}
                    alt=""
                    src={require("./images/c5.png")}
                  />
              </div> 
            </InfiniteCarousel>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <br/>
                      <br/>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                          <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                              <strong>LAW</strong>
                              </h3>
                      </MDBCol>
                          
                    </MDBRow>
                    <MDBRow>
                      <MDBCol lg="6">
                        
                          <p className="text-muted" style={{color:"#016B86",fontFamily:"Montserrat",fontSize:"16px"}}>
                          Our Legal Awareness Workshops have seen wide participation from students and professionals across the country. Within the first month of launching the same, we reached out to 1500+ students. Our primary partners in this initiative include the Rotary Club of Chennai Kilpauk, Super School India, Udayan Shalini, Rotaract DUSC, and AMC Group of Educational Institutions. We're always looking to work with more organisations, schools, and colleges! 
                          </p>
                          <br />
                      </MDBCol>
                      <MDBCol lg="6" >
                            <img className="responsive" src={require("./images/book.png")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <br/>
                      <br/>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <h3 className="font-weight-bold mb-3 p-0" style={{fontSize:"24px",color:"#016B86",fontFamily:"Montserrat"}}>
                          <strong>Support and partners</strong>
                          </h3>
                          <br />
                      </MDBCol>
                    </MDBRow>
                    
                    <MDBRow>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <br/>
                      <br/>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"2%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                      <MDBCol>
                            <img className="responsive" src={require("./images/profilecard.jpg")} style={{marginLeft:"auto",marginRight:"auto",display:"block",width: "172px", height:"194px",borderRadius:"50%"}} alt="Founder" ></img>
                            <br />
                      </MDBCol>
                    </MDBRow>                  
                </MDBCardBody>
       
      </div>
      </div>
    );
  }
}

export default Collaborations;
