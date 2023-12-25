import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-10000' >
        <div className='w-200 rounded bg-white border shadow p-4'>
            <h1>Add a user</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input></input>
                </div>
                <div>
                    <label>Phone: </label>
                    <input></input>
                </div>
                <button>Submit</button>
                <Link>Back</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Create
