# growisto-form

## Table of Contents

- [About](#about)
- [Features](#features)
- [Known issues](#issues)
- [Usage](#usage)

## About <a name = "about"></a>

A Form component which handles fields input validation and onSubmit

### Prerequisites

- node
- this module is to be used for react projects

## Features <a name="features"></a>

The following are the features supported by the component

- available props:
  - onSubmit : accepts a function which you want to execute on submit
- validation for input fields are done internally by the Form component (initial support only for email and number field)

## Usage <a name = "usage"></a>

Steps to use:

- import the Form component to your react file
- use the form component in your render method as follows

```
import React,{useState} from 'react';
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
        <input type="email" name="email" value={email} placeholder={`email id`} onChange={(e)=> updateEmail(e.target.value)}/>
        <input type="number" name="mobile" value={mobile} placeholder={`mobile number`} onChange={(e)=> updateMobile(e.target.value)}/>
        {email.indexOf('gmail')>0 && <input type="number" name="age" placeholer={`age`} value={age} onChange={(e)=> updateAge(e.target.value)}/>}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default App;
```

## Demo <a name="demo"></a>

https://csb-2q0ok-9xp7imzj5.now.sh/

## Known issues <a name="issues"></a>

- form only validates the direct children i.e input fields directly declared inside Form components
- browser saved form values when selected are not validation as the validation of fields are done on the fields value change
