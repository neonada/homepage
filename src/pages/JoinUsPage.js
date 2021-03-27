import React,{useEffect} from "react";
import Header from "../components/header/header";
import Form from "../components/forma/forma";
import Footer from "../components/footer/footer";
import "./JoinUsPageStyle.css";
function JoinUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
  return (
    <>
      <Header />
      <div className="join-us-text">
        BE PART OF AN AMBITIOUNS AND TALENTED TEAM WORKING ON SOLUTIONS THAT
        WILL SHAPE OUR FUTURE.<br></br>
        <br></br>
        WORKING AT <span>NEONADA</span> MEANS BEING PART OF A FAMILY.<br></br>
        <br></br>
        IF YOU ARE :
        <div className="position">
          ✓ FRONTEND DEVELOPER
          <br></br>✓ BACKEND DEVELOPER
          <br></br>✓ UI/UX DESIGNER
          <br></br>✓ SCRUM MASTER
          <br></br>✓ BUSSINESS AND FINANCE EXPERT
        </div>
        <br></br>
        DON'T WAIT! CONTACT US!
      </div>
      <Form />
      <Footer />
    </>
  );
}
export default JoinUsPage;
