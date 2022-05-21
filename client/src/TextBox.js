import React from "react";

const TextBox = (props) => {
    
return (<div>
    <h3 className="article-name">{props.name}</h3>
    <p className="article-text">{props.text}</p>
    <button className="del-button">Delete</button>
  </div>)
};

export default TextBox;
