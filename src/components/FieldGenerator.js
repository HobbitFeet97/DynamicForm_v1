import React from "react";
import TextGenerator from "./TextGenerator";
import QUESTION_TYPES from "../constants/QUESTION_TYPES.json";
import DropdownGenerator from "./DropdownGenerator";
import BooleanGenerator from "./BooleanGenerator";
import RadiobuttonGenerator from "./RadiobuttonGenerator";
import MultidropdownGenerator from "./MultidropdownGenerator";

function FieldGenerator({ question, handleAnswer, index }) {
  if (question.visible) {
    switch (question.type) {
      case QUESTION_TYPES.QUESTION_TYPE_TEXT:
        return (
          <TextGenerator
            question={question}
            onAnswer={handleAnswer}
            index={index}
          />
        );
      case QUESTION_TYPES.QUESTION_TYPE_DROPDOWN:
        return (
          <DropdownGenerator
            question={question}
            onAnswer={handleAnswer}
            index={index}
          />
        );
      case QUESTION_TYPES.QUESTION_TYPE_BOOLEAN:
        return (
          <BooleanGenerator
            question={question}
            onAnswer={handleAnswer}
            index={index}
          />
        );
      case QUESTION_TYPES.QUESTION_TYPE_RADIOBUTTON:
        return (
          <RadiobuttonGenerator
            question={question}
            onAnswer={handleAnswer}
            index={index}
          />
        );
      case QUESTION_TYPES.QUESTION_TYPE_MULTIDROPDOWN:
        return (
          <MultidropdownGenerator
            question={question}
            onAnswer={handleAnswer}
            index={index}
          />
        );
      default:
        return (
          <p style={{ color: "#ff0000" }}>Question Type Not Supported Yet</p>
        );
    }
  } else {
    return <div></div>;
  }
}

export default FieldGenerator;
