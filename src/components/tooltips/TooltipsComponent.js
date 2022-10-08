import React from "react";

const TooltipsComponent = () => {
  return (
    <>
      <div className="group relative inline-block">
        <button className="btn-primary medium">Tooltip on top</button>
        <div className="tooltip-top">
          Tooltip Text
        </div>
      </div>

      <div className="group relative inline-block">
        <button className="btn-primary medium">Tooltip on left</button>
        <div className="tooltip-left">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <button className="btn-primary medium">Tooltip on right</button>
        <div className="tooltip-right">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <button className="btn-primary medium">Tooltip on bottom</button>
        <div className="tooltip-bottom">
          Tooltip Text
        </div>
      </div>
    </>
  );
};

export default TooltipsComponent;
