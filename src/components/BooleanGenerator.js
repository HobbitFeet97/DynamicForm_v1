import React, { useState } from "react";

function BooleanGenerator({ question, onAnswer, index }) {
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
      <label className="form-label">
        {question.label}
      </label>
      <br></br>
      <label for={stateQuestion.bdp+"true"}>
        <input
          type="radio"
          id={stateQuestion.bdp+"true"}
          value="true"
          checked={
            stateQuestion && stateQuestion.value && stateQuestion.value[0] === "true"
          }
          onChange={(event) =>
            handleAnswer(onAnswer, index, stateQuestion, event)
          }
        />
        Yes
      </label>
      <label for={stateQuestion.bdp+"false"}>
        <input
          type="radio"
          id={stateQuestion.bdp}
          value="false"
          checked={stateQuestion && stateQuestion.value && stateQuestion.value[0] === "false"
          }
          onChange={(event) =>
            handleAnswer(onAnswer, index, stateQuestion, event)
          }
        />
        No
      </label>
    </div>
  );
}

export default BooleanGenerator;
