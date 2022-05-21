import React,{useState,useEffect} from "react";
import Input from "./Input.jsx";
import TextBox from "./TextBox.js";
import axios from 'axios';
import './App.css';

function App() {
  const[data, setData] = useState([]);

  useEffect(() => {
   axios({
     method: "get",
     url: "http://localhost:4009/messages",
   }).then((response) => {
     setData(response.data);
   });

},[])
 
console.log(data)
  return (
    <div>
      <Input />
      {data.map((el,i) => <TextBox key={i} name={el.name} text ={el.text} />)}
      
    </div>
  );
}

export default App;
