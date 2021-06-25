import React, { useState } from 'react';
export const AddTodo = (props) => {
    
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
     if(!title || !desc) {
         alert("title or description cant be empty");
         return;
     } 
     props.addTodo(title, desc);
     setTitle('')
     setDesc('')
    }
    return (
        
     <div className="addTodo">
         <div className="title">
         <p >Todo title</p>
         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </div>
         <div className="desc">
         <p>  Description</p>
         <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
         </div>
         <button  onClick={submit} style={{margin: '10px'}}>Add</button>
     </div>
     
    )

} 