import React, { useState } from "react";
import useTimeout from "./useTimeout";

function UseTimeOutComponent() {
  const [showMessage, setShowMessage] = useState(false);

  useTimeout(() => setShowMessage(true), 3000);

  return <div>{showMessage ? "Hello after 3 seconds!" : "Waiting..."}</div>;
}

export default UseTimeOutComponent;
