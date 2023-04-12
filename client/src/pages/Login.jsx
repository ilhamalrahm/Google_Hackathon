import React from 'react'
import { useState } from 'react';
import { Tabs } from 'antd';
import '../styles/login.css'
const Login = () => {
  return (
 <section id="login">
    <div className='container'>
        <div className='left-section'>
            <div className='heading'>
            <h1>Hello Again!</h1>
            <h4>Welcome back!Happy to see you again.</h4>
            </div>
            <div className='button'>
                <Tab />
                
            </div>
            <div className="loginbutton">

            </div>
            <div className='signuppara'>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
        <div className='right-section'>
            <div className='content'>
                <h1>med<span>Overflow</span></h1>
                <h3>A committee for you.</h3>
            </div>
        </div>


   </div>
 </section>
  )
}


function Tab(){
    return(
        <Tabs
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: <StudentSignup />,
          };
        })}
      />
    );
}

function StudentSignup(){
    const [notvalidated, setNotvalidated] = useState(false);
    const [user, setUser] = useState({
    name: "",
    email: "",
    pw: "",
    confirmpw: "",
    gender: "",
    college: "",
    yearOfCollege: "",
    
  });

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setUser((user) => ({ ...user, [field]: value }));
  };
return(
    <form >
    <input
      type="text"
      name="name"
      value={user.name || ""}
      placeholder="Enter Name"
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      value={user.email || ""}
      placeholder="Enter Email-ID"
      onChange={handleChange}
      required
    />
    <input
      type="tel"
      name="phno"
      value={user.phno || ""}
      placeholder="Phone number"
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="pw"
      value={user.pw || ""}
      placeholder="Enter Password"
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="confirmpw"
      value={user.confirmpw || ""}
      placeholder="Re-enter password"
      onChange={handleChange}
      required
    />
    <div className="gender">
      <label>Gender:</label>
      <div>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>
        </div>{" "}
        <div>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>
        </div>{" "}
        <div>
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            onChange={handleChange}
            required
          />
          <label htmlFor="other">Others</label>
        </div>
      </div>
    </div>
    <input
      type="text"
      name="college"
      value={user.college|| ""}
      placeholder="Enter College Name"
      onChange={handleChange}
      required
    />
     <input
      type="text"
      name="yearOfCollege"
      value={user.yearOfCollege || ""}
      placeholder="Enter Year of College"
      onChange={handleChange}
      required
    />
    <button type="submit" className="submit">
      Sign Up
    </button>

    <CustomMessage toshow={notvalidated} />
  </form>

);
}
function Message(props) {
  const { msg, colour } = props;
  return <p style={{ backgroundColor: colour, color: "#fff" }}>{msg}</p>;
}

function CustomMessage(props) {
    const { toshow } = props;
    if (toshow) {
      return <Message msg="Passwords don't match" colour="red" />;
    } else {
      return <></>;
    }
}

export default Login
