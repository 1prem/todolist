import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    // setListData([...listData, activity])
    // console.log(listData);
    // setActivity("");
    setListData((listData) => {
      const updatedList = [...listData, input]
      console.log(updatedList);
      setInput("");
      return updatedList;
    })
  }
  const deletdata = (i)=>{
    const newdata = listData.filter((ele,id)=>{
      return i!== id;
    })
    setListData(newdata);
  }
  return (
    <>
      <h2>Todolist</h2>
      <div >
      
        <input type="text" placeholder='Add activity' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='btn' type="submit" onClick={addActivity}>Add</button>
        <p >TodoList data :</p>
        {
         listData !==[] &&
         listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <button onClick={()=>deletdata(i)}>Delete</button>
                </p>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Todo
