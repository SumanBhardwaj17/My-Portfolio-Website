import React, { useEffect, useRef, useState } from "react";

function SkillBar({ percent }) {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.disconnect(); // remove if you want it to animate every time
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar"
  role="progressbar"
  aria-valuenow={parseInt(percent, 10)}
  aria-valuemin={0}
  aria-valuemax={100}>
      <div
        ref={barRef}
        className={`skill-progress ${isVisible ? "animated" : ""}`}
        style={{ "--target-width": percent }}
      ></div>
    </div>
  );
}

export default SkillBar;