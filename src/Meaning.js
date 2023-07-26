import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        <div key={index}>
          {definition.definition}
          {definition.definition}
        </div>;
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
      <p>{props.meaning.synonyms[0]}</p>
    </div>
  );
}
