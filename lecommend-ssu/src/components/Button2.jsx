import React from "react";

function Button({ serviceName }) {
  return (
    <>
      <form>
        <input type="button" value={serviceName} className="serviceButton2" />
      </form>
    </>
  );
}
export default Button;
