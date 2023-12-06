// import React from "react";
// import UserRegister from "./UserRegister";
// const Register = () => {
//   const {
//     firstName,
//     // lastName,
//     // email,
//     // confirmPassword,
//     error,
//     handelSubmit,
//     handleFirstnameCgange,
//     // handlelastNameChange,
//     // handleEmailChanege,
//     // handleConfirmPasswordChaneg,
//     // handleConfirmPasswordChanege,
//   } = UserRegister();
//   return (
//     <div>
//       <form onSubmit={handelSubmit}>
//         <input type="text" onChange={handleFirstnameCgange} value={firstName} placeholder="Enter your name" />
//         {error.firstName && <p>{error.firstName} </p>}
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import useRegister from "./useRegister";
import { IoLogoTwitter } from "react-icons/io";

const Register = () => {
  const {
    firstname,
    lastname,
    email,
    confirmPassword,
    password,
    error,
    handleFirstnameChange,
    handleLastnameChange,
    handleEmailChange,
    handlePasswordChange,
    handleconfirmPasswordChange,
    handleSubmit,
  } = useRegister();

  return (
    <div className="cobtainer" id='register'>
      <div className="wraper">
      <IoLogoTwitter  className="twitter"/>
        <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" onChange={handleFirstnameChange}/>
        {error.firstname&&<p>{error.firstname}</p>}
        <input type="text" placeholder="enter your lastname" onChange={handleLastnameChange}/>
        {error.lastname&&<p>{error.lastname}</p>}
        <input type="text" placeholder="enter your email" onChange={handleEmailChange}/>
        {error.email&&<p>{error.email}</p>}
        <input type="password" placeholder="enter your password" onChange={handlePasswordChange}/>
        {error.password&&<p>{error.password}</p>}
        <input type="password" placeholder="confirm your password" onChange={handleconfirmPasswordChange}/>
        {error.confirmPassword&&<p>{error.confirmPassword}</p>}
      <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
};

export default Register;
