// components/ToggleNextButton.tsx
"use Client";
import React from "react";

const ToggleNextButton = () => {
  const handleClick = () => {
    var element1 = document.getElementById("leftandin1");
    var element2 = document.getElementById("leftandin2");
    var inner2 = document.getElementById("inner2");

    if (element1 && element2 && inner2) {
      element1.classList.toggle("delay-06s");
      element1.classList.toggle("fadeout");
      element1.classList.toggle("displaynone");

      element2.classList.toggle("display");
      element2.classList.toggle("animated");

      inner2.classList.toggle("delay-06s");
      inner2.classList.toggle("fadeIn");
    }
  };

  return (
    <a href="#leftandin2" onClick={handleClick}>
      <h4 className="article-position">01</h4>
      <img
        src="http://semicorpus.com/yarden/icon-next.png"
        height="18px"
        width="18px"
      />
    </a>
  );
};

export default ToggleNextButton;
