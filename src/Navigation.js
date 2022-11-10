import React from "react";

const Navigation = () => {
  return (
	  <>
    <nav id = "navbar">
		  <div className = "navsection"><a href = "#firstSection"> Home </a> </div>
		  <div className = "navsection"> <a href = "#secondSection"> About </a> </div>
		  <div className = "navsection"> <a href = "#thirdSection"> Info </a> </div>
		  <div className = "navsection"> <a href = "#fourthSection"> Contact </a></div>
  </nav>

</>
  );
}


export default Navigation;