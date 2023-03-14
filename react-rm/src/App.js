import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TableData from './components/tableData'


const API_URL = process.env.REACT_APP_API_URL

function App() {
  const [data, setData] = useState([])

  console.log('data', data)

  const fetchData = () =>
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length) setData(data.results)
      })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='seperator'>
        <h2>Rick & Morty Project:</h2>
        <br></br>/
        <h2>Characters:</h2>
        <TableData data={data} />
      </div>
    </>
  )
}

export default App
