import { useState, useEffect } from 'react';
import SectionGenerator from './components/SectionGenerator';
import exampleSection from './data/exampleSection_v2.json';
import {validateSection} from './functions/ValidateSection.js';

function App() {
  const [section, setSection] = useState(exampleSection);
  const handleAnswer = (index, value) => {
    const copySection = {...section}
    if(copySection.questions){
      copySection.questions[index]['value'] = value;
    }
    validateSection(copySection);
    setSection(copySection);
  }
  return (
    <div className="App container">
      <SectionGenerator section={section} handleAnswer={handleAnswer}/>
    </div>
  );
}

export default App;
