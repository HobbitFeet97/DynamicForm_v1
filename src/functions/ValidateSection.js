export function validateSection(section) {
  let argsJson = {};
  prepareArguments(section.questions, argsJson);
  const argsString = "let data = " + JSON.stringify(argsJson) + "; ";
  section.questions.forEach((question) => {
    if (question.visibleJSExpression && question.visibleJSExpression !== "") {
      var expression = argsString + question.visibleJSExpression + ";";
      var result = eval(expression);
      if (typeof result === "boolean") {
        question.visible = result;
        if (question.clearIfNotVisible && question.visible == false) {
          question.value = [];
        }
      }
    }
    if (
      question.derivationJSExpression &&
      question.derivationJSExpression !== ""
    ) {
      var expression = argsString + question.derivationJSExpression + ";";
      var result = eval(expression);
      handleSetQuestionValue(question, result);
    }
  });
  return argsJson;
}

function prepareArguments(questions, args) {
  questions.forEach((question) => {
    handleQuestionValue(question, args);
  });
}

function handleQuestionValue(question, args) {
  let SINGLE_QUESTION_TYPES = ["TEXT", "BOOLEAN", "DROPDOWN", "RADIOBUTTON"];
  let MULTIPLE_QUESTION_TYPES = ["MULTIDROPDOWN"];
  if (SINGLE_QUESTION_TYPES.includes(question.type)) {
    updateJsonObject(
      args,
      question.bdp,
      question.value && question.value.length ? question.value[0] : "null"
    );
  }else if(MULTIPLE_QUESTION_TYPES.includes(question.type)){
      updateJsonObject(
          args,
          question.bdp,
          question.value && question.value.length ? question.value : []
      )
  }
}

function multiIndex(object, is) {
  return is.length ? multiIndex(object[is[0]], is.slice(1)) : object;
}

function pathIndex(object, is) {
  return multiIndex(object, is.split("."));
}

function updateJsonObject(jsonObject, dotNotation, value) {
  //If a string dot notation is passed in, split it
  if (typeof dotNotation == "string") {
    updateJsonObject(jsonObject, dotNotation.split("."), value);
  }
  //Otherwise, if we're at the last node and our value is not undefined, set our json value to the provided question value
  else if (dotNotation.length == 1 && value !== undefined) {
    jsonObject[dotNotation[0]] = value;
  }
  //Otherwise, check if the parent exists, if it doesn't, define it, otherwise iterate again
  else {
    let test = jsonObject[dotNotation[0]];
    if (test === undefined) {
      jsonObject[dotNotation[0]] = {};
    }
    updateJsonObject(jsonObject[dotNotation[0]], dotNotation.slice(1), value);
  }
}

function handleSetQuestionValue(question, result) {
  if (question.value && typeof question.value === "object") {
    if (typeof result === "string") {
      question.value[0] = result;
    } else if (typeof result === "object") {
      question.value = result;
    }
  } else {
    question.value = [];
    if (typeof result === "string") {
      question.value[0] = result;
    } else if (typeof result === "object") {
      question.value = result;
    }
  }
}
