import React, { useState  } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [values, setValues] = useState({
    username: "",
    password: ""
    }
  )

  
  const navigate = useNavigate()
  const handleSubmit = (event) =>{
      event.preventDefault();
      axios.post('http://localhost:5000/api/login', values)
      .then((user)=>{
        if(user.data.success)
        {
          if(user.data.message === "Logged in as employee")
          {
            console.log(user)
            localStorage.setItem("token", user.data.token)
            console.log(user.data.message)
            navigate('/employee')
          }
          else if(user.data.message === "Logged in as admin")
          {
            console.log(user)
            localStorage.setItem("token", user.data.token)
            console.log(user.data.message)
            navigate('/admin')
          }
        }
        else{
          if (response.status === 401) {
            // Handle incorrect password
            console.log('Incorrect password');
        } else {
            // Handle other errors
            console.error(user.data.message || 'An unexpected error occurred. Please try again later.');
        }
        }
        
        

        // console.log(user)
        //   localStorage.setItem("token", user.data.token)
        //   console.log(user.data.message)
        //   navigate('/')
      } )
      .catch(err => console.log(err))
  }


  return(
      <div>
  <div>
  <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-10000' >
    <div className='w-200 rounded bg-white  shadow p-4'>
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor='username' >username: </label>
                <input type='text' name='username' className='form-control' placeholder='Enter username'
                   onChange={e => setValues({...values, username: e.target.value})}
                />
                
            </div>
            <div className='mb-2'>
                <label htmlFor='password' >password: </label>
                <input type='text' name='password' className='form-control' placeholder='Enter password'
                  onChange={e => setValues({...values, password: e.target.value})}
                />
            </div>

            
            <button className='btn btn-success' >Submit</button>
            <Link to="/" className='btn btn-primary ms-3' >Back</Link>
        </form>
        <div>
          <h5>Go to registration </h5>
          <Link to="/Registration" className='btn btn-primary ms-3' >Register</Link>
        </div>
    </div>
  </div>
</div>
</div>
    )
  }
  


export default Login

