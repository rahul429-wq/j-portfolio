import React from "react";
import "./css/Right.css";

const RightBar = () => {
  return (
    <div className="RightBar">
      <div id="sec-1" className="sec sec-1">
        <div className="left">
          <p>
            &lt;html&gt; <br />
            &lt;body&gt;
            <br />
            &nbsp; &lt;h1&gt;
            <br />
          </p>
          <h1>
            HI, i’m Bhavik, <br />
            <br /> Web developer
          </h1>
          <p>&nbsp;&lt;/h1&gt;</p>
          <p>&lt;p&gt;</p>
          <p>Fullstack Developer</p>
          <p>&lt;p/&gt;</p>
        </div>
        <div className="btn">
          Sound OFF
          <i class="fa fa-soundcloud"></i>
        </div>
        <div className="right"></div>
      </div>
      <div id="sec-2" className="sec sec-2">
        Sec-2
      </div>
      <div id="sec-3" className="sec sec-3">
        Sec-3
      </div>
      <div id="sec-4" className="sec sec-4">
        Sec-4
      </div>
      <div id="sec-5" className="sec sec-5">
        Sec-5
      </div>
    </div>
  );
};

export default RightBar;
