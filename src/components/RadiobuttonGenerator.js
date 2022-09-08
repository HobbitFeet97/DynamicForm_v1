import React, { useState } from "react";

function RadiobuttonGenerator({ question, onAnswer, index }) {
  const [stateQuestion, setStateQuestion] = useState(question);
  const handleAnswer = (onAnswer, index, question, event) => {
    const copyQuestion = { ...question };
    const newValue = [event.target.value];
    copyQuestion["value"] = newValue;
    setStateQuestion(copyQuestion);
    onAnswer(index, newValue);
  };
  return (
    <div>
      <label className="form-label">{question.label}</label>
      <br></br>
      {question.options.map((option, key) => {
        return(<>
          <label>
            <input
              type="radio"
              id={key}
              value={option.categoryKey}
              checked={
                stateQuestion &&
                stateQuestion.value &&
                stateQuestion.value[0] === option.categoryKey
              }
              onChange={(event) =>
                handleAnswer(onAnswer, index, stateQuestion, event)
              }
            />
            {option.categoryDescription}
          </label>
        </>);
      })}
    </div>
  );
}

export default RadiobuttonGenerator;
