import './App.css';
// import Show from './components/Show';
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Tabel from './components/Tabel';

function App() {
  const [userData, setUserData] = useState()
  useEffect(() => {

  }, [userData])

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Form setUserData={setUserData} />} />
          <Route path='/tabl' element={<Tabel userData={userData} />} />

          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </>
  )
}
export default App

