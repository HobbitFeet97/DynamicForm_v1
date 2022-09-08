import React, { useState } from "react";

function TextGenerator({ question, onAnswer, index }) {
  const [stateQuestion, setStateQuestion] = useState(question);
  const handleAnswer = (onAnswer, index, question, event) => {
    const copyQuestion = { ...question };
    const newValue = [event.target.value];
    copyQuestion["value"] = newValue;
    setStateQuestion(copyQuestion);
    onAnswer(index, newValue);
  };
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {question.label}
      </label>
      <input
        type="email"
        className="form-control"
        id={stateQuestion.bdp}
        aria-describedby="emailHelp"
        value={stateQuestion.value ? stateQuestion.value[0] : ""}
        onChange={(event) =>
          handleAnswer(onAnswer, index, stateQuestion, event)
        }
      />
    </div>
  );
}

export default TextGenerator;
