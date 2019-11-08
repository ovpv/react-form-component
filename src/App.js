import React,{useState} from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [email,updateEmail] = useState("")
  const [mobile, updateMobile] = useState("")
  const [age, updateAge] = useState("")
  return (
    <div className="App">
      <Form onSubmit={()=>{
        //aditional computation along with default functionality
        console.log({
          email,
          mobile,
          age
        })
      }}>
        <input type="email" value={email} onChange={(e)=> updateEmail(e.target.value)}/>
        <input type="number" value={mobile} onChange={(e)=> updateMobile(e.target.value)}/>
        {email.indexOf('gmail')>0 && <input type="number" value={age} onChange={(e)=> updateAge(e.target.value)}/>}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default App;
