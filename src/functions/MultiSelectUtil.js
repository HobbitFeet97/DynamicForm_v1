export function PrepareOptions(question) {
  const options = [];
  prepareOptionsForQuestion(question, options);
  return options;
}

export function ExtractSelectedOptions(question, options) {
    return prepareOptionsForMultidropdown(question, options);
}

function prepareOptionsForQuestion(question, options) {
  const copyOptions = options;
  if (question.options) {
    question.options.map((option, key) => {
      copyOptions.push({
        name: option.categoryDescription,
        id: option.categoryKey,
      });
    });
  }
  options = copyOptions;
}

function prepareOptionsForMultidropdown(question, options) {
  if (question.value && question.value.length) {
    const returnOptions = [];
    question.value.forEach((identifier) => {
      let matchedOption = options.filter(function (option) {
        return option.id === identifier;
      });
      if(matchedOption && matchedOption.length){
          returnOptions.push(matchedOption[0])
      }
    });
  } else {
    return [];
  }
}
