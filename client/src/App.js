import React, { useState, useEffect } from "react";
import Input from "./Input.jsx";
import TextBox from "./TextBox.js";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // const [removedVideosIds, setRemovedVideosIds] = useState([]);
  function handleRemoveItem(clickedId) {
    axios.delete(`http://localhost:4009/messages/${clickedId}`).then((res) => {
      console.log(res);
      console.log(res.data);
      axios({
        method: "get",
        url: "http://localhost:4009/messages",
      }).then((response) => {
        setData(response.data);
      });
    });
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4009/messages",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return (
    <div>
      <Input />
      {data.map((el, i) => (
        <TextBox
          id={el.id}
          title={el.title}
          handleClick={handleRemoveItem}
          key={i}
          name={el.name}
          text={el.text}
        />
      ))}
    </div>
  );
}

export default App;
