import React, { useEffect } from "react";
import Header from "../components/header/header";
import Form from "../components/forma/forma";
import Footer from "../components/footer/footer";
import "./InvestPageStyle.css";
function JoinUsPage() {
  return (
    <>
      <Header />
      <div className="invest-text">
        EVERY DAY TELLS A NEW STORY, BUT TOGETHER WE CAN CREATE STRONGER
        STORIES. <br></br>
        BE FIRST IN CREATING NEW STORIES THAT MAKE <span>GLOBAL IMPACT</span>.
        <br></br>
        <br></br>
        BE AN ANGEL. <br></br>
        WE ARE WORTH EVERY PANNY.
      </div>
      <Form />
      <Footer />
    </>
  );
}
export default JoinUsPage;
