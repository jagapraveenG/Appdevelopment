import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'


const SignupPage = () => {
  const [username, setname] = useState('');
  const [password, setpassword] = useState('');
  const [repeatpassword, setrepeatpassword] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  const handleRepeatpasswordChange = (e) => {
    setrepeatpassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('USERNAME:', username);
    console.log('PASSWORD:', password);
    console.log('REPEATPASSWORD:', repeatpassword);
    console.log('EMAIL', email);
    console.log('Phone', phone);
    // Reset form fields
    setname('');
    setpassword('');
    setrepeatpassword('');
    setemail('');
    setphone('');
  };

  return (
    <div className='back' style={{width:'100vw',height:'150vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40}}>
      <h1 className='f'>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label >USERNAME:</label>
        <input
        type="text"
        onChange={handleNameChange}
        // placeholder='enter your name'
        // required
        />
        <label>PASSWORD:</label>
        <input
          type="PASSWORD"
          pattern="PASSWORD"
          value={password}
          onChange={handlePasswordChange}
        //   placeholder='enter your password'
        //   required
        />
        <label htmlFor="REPEATPASSWORD">REPEATPASSWORD:</label>
        <input
          type="PASSWORD"
          id="PASSWORD"
        //   placeholder='enter your password'
        //   value={repeatpassword}
          onChange={handleRepeatpasswordChange}
        //   required
        />
        
        <label>EMAIL</label>
        <input
          type='EMAIL'
          id='EMAIL'
          
          value={email}
        //   placeholder='enter your email'
          onChange={handleEmailChange}
        //   required
        />

        <label>PHONE</label>
        <input
           type='number'
           pattern='[0-9]*'
        
        
          value={phone}
        //   placeholder='enter your phone number'
          onChange={handlePhoneChange}
        //   required
        />
        <br></br>
        
        <br></br>
        <Link to='/'>
        <button type="submit">REGISTER</button>
        </Link>
        <br></br>

        <h3>Already User<Link to='/'>LOGIN</Link></h3>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;