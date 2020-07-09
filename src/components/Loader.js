import React from "react";
import "./Loader.css";

const Loader = (props) => {
  if (props.data.length === 0) {
    return (
      <div className="text-center">
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default Loader;
