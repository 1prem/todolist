import React,{useState} from 'react'

const Listdata = () => {
    const data = {name:"",email:""};
    const[input, setInput] = useState(data);
    const[add, setAdd] = useState([]);
    
    const handleChange = (e)=>{
        setInput({...input, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e)=>{
     e.preventDefault();
     console.log(add);
     setAdd([...add, input])
     setAdd(" ");
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name'  name="data" onChange={handleChange}  /><br/><br/>
      <input type="email" placeholder='Email' name="data" onChange={handleChange}  /><br/><br/>
      <button type="submit" className='btn'>Submit</button>
      </form>
      {
        add !==[] &&
        add.map((ele, i)=>{
            return(
                <>
                <p key={i}>
                <div> {ele.name}</div>
                <div> {ele.email}</div>
            
                </p>
                
                </>
            )
        })
      }
    </>
  )
}

export default Listdata
