import React from "react"

function MultipleChoiceQuestion({ options, children }) {
  return ( 
    <div>
      <li>
        <p>{ children }</p>
      </li>
      
      {
        options.map((option) => (
          <div>
            <label><input type="radio" name={children} />{option}</label>
          </div>
        ))
      }
      
    </div>
  );
}

export default MultipleChoiceQuestion;
