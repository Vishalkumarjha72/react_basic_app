import React from "react";
import Common from "./Common";
import web from "../src/images/images.png"

const Home = ()=>{
  return(
    <>
      <Common
       name ="Grow your learning with"
       imgsrc={web}
       visit="/service"
       btnname="Get Started"
      />
    </>
  )
}

export default Home;