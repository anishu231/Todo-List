 import React, { useState } from "react";
 import ToDolists from "./ToDolists";
 const App=()=>{
    const [inputlist, setInputList]=useState("");
    const [Items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
    const listOfItem=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputlist]
        });
        setInputList("");
    };
    const deleteItems=(id)=>{
        setItems((oldItems)=>
        {
            return oldItems.filter((arrElem,index)=>{
                return index!==id; 
            })
        })
    }
    return( 
    <>
        <div className="main-div">
            <div className="center-div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder=" Add a Items" value={inputlist} onChange={itemEvent}/>
                <button onClick={listOfItem}>+</button>
                <ol>
                    {Items.map((itemval,index)=>{
                          return  <ToDolists key={index} id={index} text={itemval}
                            onSelect={deleteItems}
                          />;
                        })}
                </ol>
            </div>
        </div>
    </>
    );
 };
 export default App;