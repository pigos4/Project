import React from "react";
import icon from "./logo1.svg";

const TextBox = (props) => {
  return (
    <div className="article-box">
      <div style={{ display: "flex" }}>
        <img style={{ width: 20, padding: 20 }} src={icon} />
        <h3 className="article-name">{props.name}</h3>
      </div>
      <p className="article-title">{props.title}</p>
      <p className="article-text">{props.text}</p>
      <button
        className="post-button"
        onClick={() => {
          props.handleClick(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TextBox;
