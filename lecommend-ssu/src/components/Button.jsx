import React from "react";

function Button({ serviceName }) {
  return (
    <>
      <form>
        <input type="button" value={serviceName} className="serviceButton" />
      </form>
    </>
  );
}
export default Button;
