import React from "react";
import FieldGenerator from "./FieldGenerator";

function SectionGenerator({ section, handleAnswer }) {
  return (
    <div>
      <h3 class="h3">{section.name ? section.name : "Unknown Name"}</h3>
      {section.questions
        ? section.questions.map((question, index) => (
            <FieldGenerator
              key={index}
              question={question}
              handleAnswer={handleAnswer}
              index={index}
            />
          ))
        : null}
    </div>
  );
}

export default SectionGenerator;
