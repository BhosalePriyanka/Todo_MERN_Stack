import './App.css';
import { useEffect, useState } from 'react';
import{Button, Form, FormGroup} from 'react-bootstrap'
import { AiFillDelete} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux'
import {setItem,updateWorkout,deleteItem}  from './Redux/action'


function App() {
  const[input,setInput] = useState({
    item:''
  })

  const handelInput = (e)=>{
  setInput({[e.target.name]:e.target.value})
  }
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)

  const handelSubmit = async(e)=>{
    const response = await fetch('http://localhost:4000/api',{
      method : 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(input)
      
    })  

    const data = await response.json()
    console.log(data)
    dispatch(updateWorkout(data))
    setInput({item:''})
  }

const fetchProduct = async()=>{
  const response = await fetch('http://localhost:4000/api')
  const dataItems = await response.json()
  console.log(dataItems)
  dispatch(setItem(dataItems))
}

useEffect(()=>{
  fetchProduct()
},[])

const handelDel = async(id) =>{
// const del = items.filter((data)=> data._id !== id)
// setData(del)

const response = await fetch('http://localhost:4000/api' + id,{
    method: 'DELETE'
  })
  dispatch(deleteItem(id))

}

  return (
    <div className="App">
      <Form className='w-50 mx-auto' >
        <FormGroup>
          <Form.Control  type ="text" name = 'item' value = {input.item} onChange = {handelInput}/>
        </FormGroup>
        <Button onClick={handelSubmit} disabled={!input.item}>Add</Button>
      </Form>
{items.map((data)=>
<>
<p><span>{data.item}</span> 
<AiFillDelete onClick={()=>handelDel(data._id)}/>
 </p>
 </>
)}

    </div>
  );
}

export default App;
