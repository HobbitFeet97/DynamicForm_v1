import React, { useState } from "react";

function DropdownGenerator({ question, onAnswer, index }) {
  const [stateQuestion, setStateQuestion] = useState(question);
  const handleAnswer = (onAnswer, index, question, event) => {
    const copyQuestion = { ...question };
    const newValue = [event.target.value];
    copyQuestion["value"] = newValue;
    setStateQuestion(copyQuestion);
    onAnswer(index, newValue);
  };
  return (
    <>
      <label>{question.label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={question.value ? question.value[0] : ""}
        onChange={(event) =>
          handleAnswer(onAnswer, index, stateQuestion, event)
        }
      >
        <option value="" disabled selected>
          {question.placeholder ? question.placeholder : ""}
        </option>
        {question.options && question.options.length >= 1
          ? question.options.map((option, i) => (
              <option value={option.categoryKey} key={i}>
                {option.categoryDescription}
              </option>
            ))
          : []}
      </select>
    </>
  );
}

export default DropdownGenerator;
