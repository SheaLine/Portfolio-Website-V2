import React, { useState, useEffect } from "react";

function withFadeEffect(OriginalComponent, initialFadeClass = "fade-enter") {
  function NewComponent(props) {
    const [fadeClass, setFadeClass] = useState(initialFadeClass);

    useEffect(() => {
      setTimeout(() => {
        setFadeClass("fade-enter-active");
      }, 30); //fade-in with slight delay to ensure transition is triggered
    }, []);

    const handleFadeOut = (callback) => {
      setFadeClass("fade-exit-active");
      setTimeout(callback, 500); // Ensure this matches the duration of your fade-out CSS transition
    };

    return (
      <div className={fadeClass}>
        <OriginalComponent {...props} handleFadeOut={handleFadeOut} />
      </div>
    );
  }
  return NewComponent;
}

export default withFadeEffect;
