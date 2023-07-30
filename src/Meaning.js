import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="WordGroup">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}

            {definition.example}

            {definition.synonyms}
          </div>
        );
      })}
    </div>
  );
}
