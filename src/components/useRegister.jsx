// import { object } from "prop-types";
// import React, { useState } from "react";
// import Register from "./Register";
// import { logDOM } from "@testing-library/react";

// const UserRegister = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName,setLastNAme] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [confirmPassword,setconfirmPassword] = useState('');
//   const [error,setError] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     confirmPassword: ''
//   })




//   const validatorEmail = (email) =>{
//     return/\S+@\S+\.\S+/.test(email)
//   }
//   const valibdatorPassword = (password) =>{
//     return password.length >=6
//   }
//   const handelSubmit = (e) =>{
   
//     e.preventDefault();
//     let formValid = true;
//     const updateError = {
//       firstName: firstName ? '' : 'Firstname is requarid',
//       lastName: lastName ? '' : "lastname is requared",
//       email: validatorEmail(email) ? '' : "Invailed email addres",
//       password: valibdatorPassword(password) ? '' : 'Kamida 6ta son kriting',
//       confirmPassword:password === confirmPassword ? '' : 'password hato'
//     }
//     Object.keys(updateError).forEach((key) => {
//       if(updateError[key]){
//         formValid = false
//       }
      
//     });
//     if(!formValid){
//       setError(updateError);
//       return;
//     }
   
//     console.log('submitted');
//   }
//   return{
//     firstName,lastName,email,confirmPassword,error,
//     handleFirstnameCgange: (event) =>{
//       setFirstName(event.target.value);
//       setError({...error,firstName:''})
//     },
//     handlelastNameChange: (event) =>{
//       setLastNAme(event.target.value);
//       setError({...error,lastName:''})
//     },
//      handleEmailChanege: (event) =>{
//       setEmail(event.target.value);
//       setError({...error,email:''})
//     },
//     handleConfirmPasswordChaneg: (event) =>{
//       setPassword(event.target.value);
//       setError({...error,password:''})
//     },
//     handleConfirmPasswordChanege: (event) =>{
//       setconfirmPassword(event.target.value);
//       setError({...error,confirmPassword:''})
//     },
//     handelSubmit
//   }
// };

// export default UserRegister;


import React from 'react'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
const useRegister = () => {
  const navigate=useNavigate()
const[firstname,setFirstname]=useState('')
const[lastname,setLastname]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[confirmPassword,setconfirmPassword]=useState('');

const[error,setError]=useState({
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  confirmPassword:'',
})

const validateEmail=(email)=>{
  return /\S+@\S+\.\S+/.test(email)
}

const validatePassword=(password)=>{
  return password.length >=6;
}


const handleSubmit=(event)=>{
  event.preventDefault();
  let formValid=true;

  const updateError={
    firstname:firstname?'':'Firstname is required',
    lastname:lastname?'':'Lastname is required',
    email:validateEmail(email)?'':'Invalid email',
    password:validatePassword(password)?'':'Kamida 6 ta raqam kiriting',
    confirmPassword:password===confirmPassword?'':'Parol oldingi parolga mos kelmadi!'
  }

  Object.keys(updateError).forEach((key)=>{
    if (updateError[key]){
      formValid=false
      
    }

  })
if (!formValid) {
  setError(updateError)
  return;
  
}

localStorage.setItem('email',email)
localStorage.setItem('password',password)
console.log('submitted');
navigate('/profile')

 

}





  return {
    firstname,
    lastname,
    email,
    confirmPassword,
    password,
    error,
    handleFirstnameChange:(event)=>{
      setFirstname(event.target.value.trim());
      setError({...error,firstname:''});



    },
    handleLastnameChange:(event)=>{
      setLastname(event.target.value.trim());
      setError({...error,lastname:''});



    },
    handleEmailChange:(event)=>{
      setEmail(event.target.value.trim());
      setError({...error,email:''});



    },
    handlePasswordChange:(event)=>{
      setPassword(event.target.value.trim());
      setError({...error,password:''});



    },
    handleconfirmPasswordChange:(event)=>{
      setconfirmPassword(event.target.value.trim());
      setError({...error,confirmPassword:''});



    },
    handleSubmit,

  }
}

export default useRegister
