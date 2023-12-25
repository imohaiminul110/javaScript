import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-10000' >
        <div className='w-200 rounded bg-white  shadow p-4'>
            <h1>Add a user</h1>
            <form>
                <div className='mb-2'>
                    <label htmlFor='name' >Name: </label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name' ></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='phone' >Phone: </label>
                    <input type='text' name='phone' className='form-control' placeholder='Enter Phone' ></input>
                </div>
                <button className='btn btn-success' >Submit</button>
                <Link to="/" className='btn btn-primary ms-3' >Back</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Create
