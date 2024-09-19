import React from "react";
import "./LinkBtn.css";

function LinkBtn({ text, target }) {
  return (
    <button className="link-btn" onClick={() => window.open(target, "_blank")}>
      {text}
    </button>
  );
}

export default LinkBtn;
