import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import {
  PrepareOptions,
  ExtractSelectedOptions,
} from "../functions/MultiSelectUtil.js";

function MultidropdownGenerator({ question, onAnswer, index }) {
  const [stateQuestion, setStateQuestion] = useState(question);
  const handleAnswer = (onAnswer, index, question, newArray) => {
    const copyQuestion = { ...question };
    const newValue = newArray;
    copyQuestion["value"] = newValue;
    setStateQuestion(copyQuestion);
    onAnswer(index, newValue);
  };

  const onSelect = (selectedList, selectedItem) => {
    const answers = stateQuestion.value ? stateQuestion.value : [];
    answers.push(selectedItem.id);
    handleAnswer(onAnswer, index, stateQuestion, answers);
  };

  const onRemove = (selectedList, selectedItem) => {
    const answers = stateQuestion.value ? stateQuestion.value : [];
    const deleteIndex = answers.findIndex((answer) => answer === selectedItem.id);
    answers.splice(deleteIndex, 1);
    handleAnswer(onAnswer, index, stateQuestion, answers);
  };

  let options = PrepareOptions(stateQuestion);
  let selectedValues = ExtractSelectedOptions(stateQuestion, options);
  return (
    <>
      <label>{question.label}</label>
      <Multiselect
        options={options}
        selectedValues={selectedValues}
        onSelect={onSelect}
        displayValue="name"
        onRemove={onRemove}
      />
    </>
  );
}

export default MultidropdownGenerator;
