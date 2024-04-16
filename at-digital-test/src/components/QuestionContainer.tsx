import "./QuestionContainer.css";
import { useState, useRef, useEffect } from "react";

function QuestionContainer() {
  const [toggled, setToggled] = useState(false);

  const toggleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const toggleAnswer = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    if (toggled) {
      titleRef.current?.classList.add("purple");
      toggleRef.current?.classList.add("purple");
    } else {
      titleRef.current?.classList.remove("purple");
      toggleRef.current?.classList.remove("purple");
    }
  }, [toggled]);

  return (
    <div className="question">
      <div className="ques-toggler">
        <h3 ref={titleRef} className="qs-h3">
          Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
        </h3>
        <div ref={toggleRef} onClick={toggleAnswer} className="toggle">
          +
        </div>
      </div>
      {toggled && (
        <div className="ans-tex">
          Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
          ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien
          massa morbi risus sagittis tortor integer.
        </div>
      )}
    </div>
  );
}

export default QuestionContainer;
