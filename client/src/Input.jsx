import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const updateTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };
  const updateDescription = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

  return (
    <form className="input-box">
      <label for="name" name="name">
        Name:
      </label>
      <input
        className="input-name"
        type="text"
        name="name"
        placeholder="Put your name"
        onChange={updateName}
      />
      <label for="title" name="title">
        Title:
      </label>
      <input
        className="input-text"
        type="text"
        name="title"
        placeholder="Put your title"
        onChange={updateTitle}
      />
      <label for="description" name="description">
        Description:
      </label>
      <input
        type="text"
        name="description"
        placeholder="What have you learned so far?"
        onChange={updateDescription}
      />
      <button type="submit"> Submit </button>
    </form>
  );
};
export default Input;
