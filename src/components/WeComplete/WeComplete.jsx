import React from "react";
import foto from "../../assets/WeComplete/foto.png";
import WeCompleteBlock from "../../ui/WeCompleteBlock";

const WeComplete = () => {
  return (
    <div className="WeComplete">
      <div className="WeComplete__sections">
        <div className="WeComplete__img">
          <img src={foto} alt="foto" />
        </div>
        <WeCompleteBlock />
      </div>
    </div>
  );
};

export default WeComplete;
