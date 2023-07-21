import React,{useState} from 'react'

export default function Todolist() {

    const [input,setInput]=useState("");
    const [data,setData]= useState([]);

    const handleClick =()=>{
        setData(...data, input);
        console.log(data);
       
    }
  return (

    <div>
    <h3>Employee Record</h3>

    <div className='form-field'>
    <label>Employee Name :</label>
    <input type='text' name="input" placeholder='name' onChange={(e)=>{ setInput (e.target.value)}} />

    <button type='button' className='addbtn' onClick={handleClick}> + Add Name</button><br></br>

    
    </div>

{
    
          data !==[]&&
            data.map((ele, i) => (
          <p key={i}>
            {ele}
        
          </p>
        ))
    }
      



      
    </div>
  )
}
