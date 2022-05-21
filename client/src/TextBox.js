import React from 'react';


const TextBox = (props) =>

{
    
    <div>
        <h3 className='article-name'>{props.name}</h3>
    
        <p className='article-text'>{props.text}</p> 
        <botton className= 'del-button'>Delete</botton>
    </div>
}


export default TextBox;