import './App.css';
import React, { useState, } from 'react'
// import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser((prev) => [...prev, {
      name: name,
      age: age,
      color: color
    }])
    setName('')
    setAge('')
    setColor('black')
  }

  return (
    <div id="app" className='flex flex-col w-1/2 mx-auto'>
      <h1 className='mx-auto py-1 mt-4  bg-black text-white w-1/3 text-center rounded-3'>Html Form</h1>
      <form onSubmit={handleSubmit} type="submit" className='mx-auto border-2 border-gray-500 mt-1 p-6'>
        name: <input className='bg-slate-300 border-gray-500 border-2 rounded-2' value={name} type="text" onChange={(e) => setName(e.target.value)} /> <br /><br />
        Color: <input value={color} type='color' onChange={(e) => setColor(e.target.value)} /> <br /><br />
        age: <input className='bg-slate-300 border-gray-500 border-2 rounded-2' value={age} type='number' onChange={(e) => setAge(e.target.value)} />
        <button className='bg-blue-500 p-1 rounded-lg mx-3 text-white hover:bg-blue-600' type='submit' >Submit</button>
      </form><br />
      <table>
        <tbody className=' '>
          <tr>
            <th className='bg-gray-400 px-2 border-2 border-gray-500 '>Name</th>
            <th className='bg-gray-400 px-2 border-2 border-gray-500'>Color</th>
            <th className='bg-gray-400 px-2 border-2 border-gray-500'>Age</th>
          </tr>
          {user?.map((el, index) => {
            return (
              <tr key={index} className='mx-auto'>
                <td className='px-2 border-2 border-gray-500' data-bs-toggle="modal" data-bs-target="#exampleModal">{el.name}</td>
                <td className='px-2 border-2 border-gray-500'>{el.color}</td>
                <td className='px-2 border-2 border-gray-500'>{el.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 mx-auto mt-  bg-black text-white w-1/3 text-center rounded-2" id="exampleModalLabel">User Detail</h1>

              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">close</button> */}
            </div>
            <div className="modal-body mx-auto">
              <table>
                <tbody className=''>
                  <tr>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500 '>Name</th>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Color</th>
                    <th className='bg-gray-400 px-2 border-2 border-gray-500'>Age</th>
                  </tr>
                  {user?.map((el, index) => {
                    return (
                      <tr key={index} className='mx-auto'>
                        <td className='px-2 border-2 border-gray-500' data-bs-toggle="modal" data-bs-target="#exampleModal">{el.name}</td>
                        <td className='px-2 border-2 border-gray-500'>{el.color}</td>
                        <td className='px-2 border-2 border-gray-500'>{el.age}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>            </div>
            <div className="modal-footer ">
              <button type="button" className="mx-auto bg-blue-500 p-1 rounded-lg text-white hover:bg-blue-600" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

