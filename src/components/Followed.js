import React, { useState } from "react";

function Followed() {
  const [count, setCount] = useState(0);

  const hundleFolowed = () => {
    setTimeout(() => {
      alert("you followed like  " + count + "  Times");
    }, 3000);
  };
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <p>you Followed {count} Times</p>
      <button onClick={hundleFolowed}>Folowed</button>
    </div>
  );
}

export default Followed;
