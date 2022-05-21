import React, { useState } from "react";
import axios from 'axios';

function postRequest (data){
  axios.post('http://localhost:4009/messages', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const Input = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const updateName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const updateTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };
  const updateDescription = (event) => {
    const text = event.target.value;
    setText(text);
  };

  return (
    <form className="input-box">
      <label htmlFor="name" name="name">
        Name:
      </label>
      <input
        className="input-name"
        type="text"
        name="name"
        placeholder="Put your name"
        onChange={updateName}
      />
      <label htmlFor="title" name="title">
        Title:
      </label>
      <input
        className="input-title"
        type="text"
        name="title"
        placeholder="Put your title"
        onChange={updateTitle}
      />
      <label htmlFor="description" name="description">
        Description:
      </label>
      <input
        className="input-text"
        type="text"
        name="description"
        placeholder="What have you learned so far?"
        onChange={updateDescription}
      />
      <button className="post-button" type="submit" onClick={()=>{postRequest({name,title,text})}}> Submit </button>
    </form>
  );
};
export default Input;
