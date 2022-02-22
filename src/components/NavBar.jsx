import React from "react";

function NavBar(link) {
  const links = ["home", "about", "projects"];
  
  const linkArray = links.map((index) => {
    
    return<nav><a href key={index}>{index}</a></nav>
  })
return linkArray
}



 

export default NavBar;
