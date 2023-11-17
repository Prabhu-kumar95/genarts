import React from "react";  

const src =
  "https://room8studio.com/wp-content/uploads/2022/06/r8s.mp4";

function Home (){
   
    return(
        <div> 
            <div className="headercontainer"> 
            <div>
                <img className="image" src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-pointing-something-7183476-5842401.png?f=webp" alt="..."/>
            </div><span>
            <div className="quote1">
                <p>WE'RE SMART</p>
            </div> 
            <div className="quote2  ">
                <p className="font-effect-outline">WITH ART</p>
            </div> </span>
            </div> 
            <div className="quote3">
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  </div><span> <video autoPlay loop muted className="video"  width="1000px" >
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video></span>
           
           
        </div>
    )
}
export default Home;